import React, { useState, useRef, useEffect } from 'react';

const AvatarEditor = () => {
  const canvasRef = useRef(null);
  const imageInputRef = useRef(null);
  const scaleInputRef = useRef(null);
  const rotationInputRef = useRef(null);

  const [image, setImage] = useState(new Image());
  const [canvas, setCanvas] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setCanvas(canvasRef.current.getContext('2d'));
  }, []);

  useEffect(() => {
    if (image.src) {
      updateCanvas();
    }
  }, [image, preview]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage = new Image();
        newImage.src = e.target.result;
        setImage(newImage);
        setPreview({
          scale: 1,
          rotation: 0,
          offsetX: 0,
          offsetY: 0,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const updateCanvas = () => {
    const scale = parseFloat(scaleInputRef.current.value);
    const rotation = parseFloat(rotationInputRef.current.value);

    canvas.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // Применяем масштаб и вращение
    canvas.save();
    canvas.translate(
      canvasRef.current.width / 2 + preview.offsetX,
      canvasRef.current.height / 2 + preview.offsetY
    );
    canvas.scale(scale, scale);
    canvas.rotate((rotation * Math.PI) / 180);
    canvas.drawImage(image, -image.width / 2, -image.height / 2);
    canvas.restore();

    // Получаем изображение в формате base64 для предпросмотра
    const editedImage = canvasRef.current.toDataURL('image/jpeg');
    setPreview({
      scale,
      rotation,
      offsetX: preview.offsetX,
      offsetY: preview.offsetY,
      previewImage: editedImage,
    });
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setDragStart({
      x: event.clientX - preview.offsetX,
      y: event.clientY - preview.offsetY,
    });
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const newOffsetX = event.clientX - dragStart.x;
      const newOffsetY = event.clientY - dragStart.y;
      setPreview({
        ...preview,
        offsetX: newOffsetX,
        offsetY: newOffsetY,
      });
      updateCanvas();
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const applyChanges = () => {
    // Получаем изображение в формате base64 для отправки на сервер
    const editedImage = canvasRef.current.toDataURL('image/jpeg');

    // Ваш код для отправки изображения на сервер
    // Например, используя fetch
    // fetch('/upload', {
    //   method: 'POST',
    //   body: JSON.stringify({ image: editedImage }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleImageChange}
        ref={imageInputRef}
        accept="image/*"
      />
      <br />
      <label htmlFor="scale">Scale:</label>
      <input
        type="range"
        id="scale"
        min="0.1"
        max="2"
        step="0.1"
        defaultValue="1"
        ref={scaleInputRef}
        onChange={updateCanvas}
      />
      <br />
      <label htmlFor="rotation">Rotation:</label>
      <input
        type="range"
        id="rotation"
        min="0"
        max="360"
        step="1"
        defaultValue="0"
        ref={rotationInputRef}
        onChange={updateCanvas}
      />
      <br />
      <button onClick={applyChanges}>Apply Changes</button>

      <canvas
        ref={canvasRef}
        width="400"
        height="400"
        style={{ border: '1px solid #000', marginTop: '20px' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      ></canvas>

      {preview && (
        <div>
          <h2>Preview</h2>
          <img
            src={preview.previewImage}
            alt="Preview"
            style={{ maxWidth: '100%', maxHeight: '400px' }}
          />
        </div>
      )}
    </div>
  );
};

export default AvatarEditor;
