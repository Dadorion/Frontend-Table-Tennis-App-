import React from 'react'

import s from './SorterMenu.module.css'

function SorterMenu({ list, handle }) {
  const items = list.map((item) => <p key={item.id}>{item.name}</p>)

  return (
    <div className={s.sortMenu} onClick={handle}>
      {items}
    </div>
  )
}

export default SorterMenu
