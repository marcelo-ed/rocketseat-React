import style from './Header.module.css'
import igniteLogo from '../images/ignite-logo.svg'

export function Header(){
    return(
        <header className={style.header}>
            <img src={igniteLogo} alt=""  className='logoImage' />
        </header>
    )
}