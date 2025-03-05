import Navigation from "../components/Navigation"
import DarkLight from "../components/DarkLight"

const Header = () => {
  return (
    <header>
        <p>Header Logo</p>
        <div className="header-buttons">
        <DarkLight/>
        <Navigation/>
        </div>
    </header>
  )
}
export default Header