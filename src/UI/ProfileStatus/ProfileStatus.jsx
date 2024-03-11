import React, { useState, useRef, useEffect  } from 'react';
import s from './ProfileStatus.module.css';

function ProfileStatus({status, updateStatus}) {
  const [editMode, setEditMode] = useState(false);
  const [statusCurrent, setStatus] = useState(status);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editMode]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(statusCurrent);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={`${s.Status}`}>
      {!editMode ? (
        <div>
          <span onDoubleClick={activateEditMode}>
            {status || 'create your status'}
          </span>
        </div>
      ) : (
        <div>
          <input
            ref={inputRef}
            onBlur={deactivateEditMode}
            value={statusCurrent}
            onChange={onStatusChange}
          />
        </div>
      )}
    </div>
  );
}

export default ProfileStatus;
