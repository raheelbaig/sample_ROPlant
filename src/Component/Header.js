import './Header.css'
import logo from '../Assets/logo.png'
function Header() {
    return (
        <div className="header">
        <img src={logo} alt='logo.png' height={150}/>
        </div>
    )
}
export default Header;