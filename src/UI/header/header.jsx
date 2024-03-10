import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import s from './header.module.scss'

import editIcon from '../../assets/icons/svg_pack/White/Light/Edit.svg'
import backIcon from '../../assets/icons/svg_pack/White/Regular/ArrowLeft.svg'
import checkIcon from '../../assets/icons/svg_pack/White/Regular/Check.svg'

function Header({exit, headName, edit, confirm}) {
    return (
    <div className={s.header}>
      <Link to={exit}>
        <div className={s.tapArea}>{exit && <img src={backIcon} alt='backIcon' />}</div>
      </Link>

      <p>{headName}</p>

      <Link to={edit}>
        <div className={s.tapArea}>
          {edit && <img src={editIcon} alt='edit_pen' />}
          {confirm && <img src={checkIcon} alt='checkIcon' />}
        </div>
      </Link>
    </div>
  )
}

Header.propTypes = {
  exit: PropTypes.string,
  headName: PropTypes.string,
  edit: PropTypes.string,
  confirm: PropTypes.string,
}

Header.defaultProps = {
  exit: '',
  headName: 'заголовок',
  edit: '',
  confirm: '',
};

export default Header
