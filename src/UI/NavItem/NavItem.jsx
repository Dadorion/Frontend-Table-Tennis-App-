import s from './NavItem.module.css'
function NavItem (props) {
    return(
        <div>
            <div>
                <img className= { s.img } 
                    src= { props.img } 
                    alt="news" 
                />
            </div>
            <p>{ props.text }</p>
        </div>
    )
}


export default NavItem;