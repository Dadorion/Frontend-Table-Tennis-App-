import { useSelector, useDispatch } from 'react-redux'
import style from './HeaderTop.module.css'
import pro_face from '../../../icons/profile.png'
import notificationSVG from '../../../icons/svg/notification.svg'
import { changeNameAC, updateNameAC, toggleEditingNameAC } from '../../../redux/header-reduser'


function HeaderTop(props) {

    const state = useSelector(state => state.headerReduser)
    const dispatch = useDispatch()

    function onNameChange(newNameText) {
        dispatch(changeNameAC(newNameText))
    }

    function onEdite() {
        dispatch(toggleEditingNameAC())
    }
    function onSave() {
        dispatch(updateNameAC(state.newNameText))
        dispatch(toggleEditingNameAC())
    }

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
                    {!state.isEditingName
                        ? (<p className={style.name} onClick={onEdite}>{state.name}</p>)
                        : (<div>
                            <input type="text" value={state.newNameText} onChange={e => onNameChange(e.target.value)} />
                            <button onClick={onSave}>Сохранить</button>
                        </div>)}

                    <p className={style.stats}>
                        <span>рейтинг: {props.rating != null ? props.rating : '111'}</span>
                        <span>место: {props.place != null ? props.place : '1'}</span>
                    </p>
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