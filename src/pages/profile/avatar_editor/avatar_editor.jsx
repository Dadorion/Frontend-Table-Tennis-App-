import React, { useState } from "react";
import s from "./avatar_editor.module.css";
import avatarAlt from "../../../icons/profile.png";

const AvatarEditor = () => {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [previewImage, setPreviewImage] = useState(null);

  const handleScaleChange = (e) => {
    const newScale = parseFloat(e.target.value);
    setScale(newScale);
    updatePreviewImage(newScale, rotation);
  };

  const handleRotationChange = (e) => {
    const newRotation = parseFloat(e.target.value);
    setRotation(newRotation);
    updatePreviewImage(scale, newRotation);
  };

  const updatePreviewImage = (newScale, newRotation) => {
    // Здесь вы можете использовать ваш компонент аватара и обновить его предварительный просмотр
    // Например, создайте Canvas, нарисуйте на нем изображение с учетом масштаба и поворота
    // и установите получившееся изображение в state previewImage
  };

  const handleSave = () => {
    // Отправьте previewImage на сервер
    // Например, используйте API запрос с библиотекой axios или fetch
    // После успешного сохранения обновите изображение в профиле пользователя
  };

  return (
    <div className={s.AvatarEditor}>
      <div>
        <label htmlFor="scale">Масштаб:</label>
        <input
          type="range"
          id="scale"
          name="scale"
          min="1"
          max="3"
          step="0.1"
          value={scale}
          onChange={handleScaleChange}
        />
      </div>

      <div>
        <label htmlFor="rotation">Поворот:</label>
        <input
          type="range"
          id="rotation"
          name="rotation"
          min="-180"
          max="180"
          step="1"
          value={rotation}
          onChange={handleRotationChange}
        />
      </div>

      <div>
        {/* Здесь вы можете использовать ваш компонент аватара и передать ему значения scale и rotation */}
        <img
          src={avatarAlt}
          alt="Аватар"
          style={{
            transform: `scale(${scale}) rotate(${rotation}deg)`,
            // Добавьте другие стили, если необходимо
          }}
        />
      </div>

      {previewImage && (
        <div>
          <p>Предварительный просмотр:</p>
          <img
            src={previewImage}
            alt="Предварительный просмотр"
            style={{
              maxWidth: "100%",
              maxHeight: "300px", // Ограничение по высоте
            }}
          />
        </div>
      )}

      <button onClick={handleSave}>Сохранить</button>
      <div
        className={s.backgroundPopup}
        // onClick={handleChangePhoto}
      >
        <div className={s.loadPopup}>
          <span>Загрузить фото</span>
          <label htmlFor="avatar">
            Выбрать файл
          </label>
          <input
            type="file"
            id="avatar"
            accept=".png, .jpg, .jpeg"
            // onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
};

export default AvatarEditor;
