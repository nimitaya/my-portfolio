import Navigation from "../components/Navigation"
import DarkLight from "../components/DarkLight"
import "../styles/Header.css"

const Header = () => {
  return (
    <header>
        <img src="./icons/dragon-icon.png" alt="logo dragon" className="dragon-logo"/>
        <div className="header-buttons">
        <DarkLight/>
        <Navigation/>
        </div>
    </header>
  )
}
export default Header