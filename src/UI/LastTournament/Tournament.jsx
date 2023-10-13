import s from './Tournament.module.css'

function Tournament (props){
    return(
        <div className={s.wrapper}>
            <h3 className={s.title}>Итоги турнира <span>{props.date !=null ? props.date : '01.01.2021'}</span></h3>
            <p className={s.nameTour}>{props.tournament !=null ? props.tournament : 'Турнир турнир'}</p>
            <a className={s.link} href='/'>Смотреть</a>
        </div>
    )
}

export default Tournament; 