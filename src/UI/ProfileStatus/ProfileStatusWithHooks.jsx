import React, { useEffect, useState } from 'react'

import s from './ProfileStatus.module.css'

function ProfileStatusWithHooks(props) {
  // хуки
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div className={`${s.Status}`}>
      {!editMode ? (
        <div>
          <span onDoubleClick={activateEditMode}>{props.status ? props.status : 'create your status'}</span>
        </div>
      ) : (
        <div>
          <input autoFocus onBlur={deactivateEditMode} value={status} onChange={onStatusChange} />
        </div>
      )}
    </div>
  )
}

export default ProfileStatusWithHooks
