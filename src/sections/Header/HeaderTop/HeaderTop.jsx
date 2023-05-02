import style from './HeaderTop.module.css'
import pro_face from '../../../icons/profile.png'
import notificationSVG from '../../../icons/svg/notification.svg'


function HeaderTop(props) {
    return (
        <div className={style.wrapper}>
            <div className={style.left}>
                <a href="/">
                    <img className={style.ava}
                        src={props.player != null ? props.player : pro_face}
                        alt="ava"
                    />
                </a>
                <div>
                    <p className={style.name}>{props.name != null ? props.name : 'Имя пользователя'}</p>
                    <p className={style.stats}><span>рейтинг: {props.rating != null ? props.rating : '111'}</span> <span>место: {props.place != null ? props.place : '1'}</span></p>
                </div>
            </div>
            <div className='right-content'>
                <a href="/">
                    <img src={notificationSVG} alt="svg" />
                </a>
            </div>
        </div>
    )
}
export default HeaderTop;