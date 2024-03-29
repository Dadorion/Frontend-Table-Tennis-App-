import s from './Button.module.css'
function Button(props) {
    const { isDisabled, type, handle, buttName } = props
    switch (buttName) {
        case 'Далее':
            return (
                <div className={s.Button}>
                    <button
                        disabled={isDisabled}
                        type={type || 'button'}
                        onClick={handle}
                    >{buttName}</button>
                </div>
            )
        case 'Зарегистрироваться':
            return (
                <div className={s.Button}>
                    <button
                        type={'submit'}
                    >{buttName}</button>
                </div>
            )
        case 'Войти':
            return (
                <div className={s.Button}>
                    <button
                        type={type || 'submit'}
                    >{buttName}</button>
                </div>
            )
        case 'Показать':
            return (
                <div className={s.Button}>
                    <button
                        type={type || 'submit'}
                    >{buttName}</button>
                </div>
            )
        default:
            return (
                <div className={s.Button}>
                    <button>Передай имя в пропсах</button>
                </div>
            )
    }
}


export default Button;