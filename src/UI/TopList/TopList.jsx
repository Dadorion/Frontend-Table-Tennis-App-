import s from './TopList.module.css'

function TopList(props) {
  return (
    <div className={s.wrapper}>
      <p className={s.title}>Топ игроков</p>
      <ul className={s.list}>
        <li className={s.listItem}>&#8470;1{props.player != null ? props.player : 'Иван Иванов'}</li>
        <li className={s.listItem}>&#8470;2{props.player != null ? props.player : 'Иван Иванов'}</li>
        <li className={s.listItem}>&#8470;3{props.player != null ? props.player : 'Иван Иванов'}</li>
      </ul>
      <a className={s.link} href='/'>
        Подробнее
      </a>
    </div>
  )
}

export default TopList
