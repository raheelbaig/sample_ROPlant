import styles from './Header.module.css'
import logo from '../Assets/RO Plant.png'
function Header() {
    return (
        <div className={styles.header}>
        <img src={logo} alt='logo.png' height={150}/>
        </div>
    )
}
export default Header;