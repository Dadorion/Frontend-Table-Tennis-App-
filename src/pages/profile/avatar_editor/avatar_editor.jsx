/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react'
import AvatarEditor from 'react-avatar-editor'
import Dropzone from 'react-dropzone'
import { useDispatch } from 'react-redux'

import s from './avatar_editor.module.css'

import { savePhoto } from '../../../redux/profile-reducer'

const dropzoneStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '200px',
  height: '200px',
  border: '1px dashed #76767A',
  borderRadius: '12px',
  cursor: 'pointer',
  padding: '89px 27px',
}

function AvatarEditorComponent() {
  const [image, setImage] = useState(null)
  const [editor, setEditor] = useState(null)
  const [scale, setScale] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [showDropzone, setShowDropzone] = useState(true)

  const dispatch = useDispatch()

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0]
    if (file) {
      setImage(file)
      setShowDropzone(false)
    }
  }

  const handleCancel = () => {
    // history.push("/edit-my-profile");
  }

  const handleScaleChange = (e) => {
    const newScale = parseFloat(e.target.value)
    setScale(newScale)
  }

  const handleRotationChange = (e) => {
    const newRotation = parseFloat(e.target.value)
    setRotation(newRotation)
  }
  const handleChooseNewPhoto = () => {
    setImage(null)
    setShowDropzone(true)
  }

  const handleSave = async () => {
    if (editor) {
      const canvas = editor.getImageScaledToCanvas()
      const editedImage = canvas.toDataURL()

      if (editedImage) {
        const blob = await fetch(editedImage).then((res) => res.blob())
        const file = new File([blob], 'avatar.png', { type: 'image/png' })

        const fileFD = new FormData()
        fileFD.append('avatar', file)

        dispatch(savePhoto(fileFD))
      }
    }
  }

  return (
    <div className={s.avatarEditorContainer}>
      {showDropzone && (
        <div className={s.dropzoneWrapper}>
          <Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className={s.dropzone} style={dropzoneStyle}>
                <input {...getInputProps()} />
                <p>Нажмите, чтобы выбрать фото</p>
              </div>
            )}
          </Dropzone>
          <button type='button'>Назад</button>
        </div>
      )}

      {image && (
        <div className={s.editorWrapper}>
          <label htmlFor='scale'>Scale:
          <input type='range' id='scale' min='1' max='2' step='0.01' value={scale} onChange={handleScaleChange} />
          </label>

          <label htmlFor='rotation'>Rotation:
          <input
            type='range'
            id='rotation'
            min='-90'
            max='90'
            step='1'
            value={rotation}
            onChange={handleRotationChange}
            />
            </label>

          <AvatarEditor
            ref={(editorInstance) => setEditor(editorInstance)}
            image={image}
            width={250}
            height={250}
            border={50}
            color={[255, 255, 255, 0.6]}
            scale={scale}
            rotate={rotation}
          />

          <button type='button' onClick={handleSave}>Сохранить</button>
          <button type='button' onClick={handleChooseNewPhoto}>Выбрать другое фото</button>
          <button type='button' onClick={handleCancel} className={s.cancelBtn}>
            Отменить
          </button>
        </div>
      )}
    </div>
  )
}



export default AvatarEditorComponent
