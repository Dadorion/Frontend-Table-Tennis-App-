// AvatarEditorComponent.jsx

import React, { useState } from "react";
import AvatarEditor from "react-avatar-editor";
import Dropzone from "react-dropzone";
import s from "./avatar_editor.module.css";
import { useDispatch } from "react-redux";
import { savePhoto } from "../../../redux/profile-reducer";
import { Link } from "react-router-dom";

const AvatarEditorComponent = () => {
  const [image, setImage] = useState(null);
  const [editor, setEditor] = useState(null);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [showDropzone, setShowDropzone] = useState(true);

  const dispatch = useDispatch();

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setImage(file);
      setShowDropzone(false); // Скрыть зону драг-энд-дроп
    }
  };

  const handleCancel = () => {
    setImage(null);
    setShowDropzone(true); // Показать зону драг-энд-дроп
  };

  const handleScaleChange = (e) => {
    const newScale = parseFloat(e.target.value);
    setScale(newScale);
  };

  const handleRotationChange = (e) => {
    const newRotation = parseFloat(e.target.value);
    setRotation(newRotation);
  };
  const handleChooseNewPhoto = (e) => {
    window.alert('Функционал не прописан')
  };

  const handleSave = async () => {
    if (editor) {
      const canvas = editor.getImageScaledToCanvas();
      const editedImage = canvas.toDataURL();

      if (editedImage) {
        const blob = await fetch(editedImage).then((res) => res.blob());
        const file = new File([blob], "avatar.png", { type: "image/png" });

        const fileFD = new FormData();
        fileFD.append("avatar", file);

        // 1. Используем FormData для передачи файла.
        dispatch(savePhoto(fileFD));
        <Link to={"/edit-my-profile"} />;
      }
    }
  };

  return (
    <div className={s.avatarEditorContainer}>
      {showDropzone && (
        <Dropzone onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className={s.dropzone}
              style={dropzoneStyle}
            >
              <input {...getInputProps()} />
              <p>Drag 'n' drop an image here, or click to select image</p>
            </div>
          )}
        </Dropzone>
      )}

      {image && (
        <div className={s.editorWrapper}>
          <label htmlFor="scale">Scale:</label>
          <input
            type="range"
            id="scale"
            min="1"
            max="2"
            step="0.01"
            value={scale}
            onChange={handleScaleChange}
          />
          <br />

          <label htmlFor="rotation">Rotation:</label>
          <input
            type="range"
            id="rotation"
            min="-90"
            max="90"
            step="1"
            value={rotation}
            onChange={handleRotationChange}
          />
          <br />

          <AvatarEditor
            ref={(editorInstance) => setEditor(editorInstance)}
            image={image}
            width={250}
            height={250}
            border={50}
            color={[255, 255, 255, 0.6]} // RGBA
            scale={scale}
            rotate={rotation}
          />

          <br />

          <button onClick={handleSave}>Сохранить</button>
          <button onClick={handleChooseNewPhoto}>Выбрать другое фото</button>
          <button onClick={handleCancel}>Отменить</button>
        </div>
      )}
    </div>
  );
};

const dropzoneStyle = {
  width: "250px",
  height: "250px",
  border: "2px dashed #aaa",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};

export default AvatarEditorComponent;
