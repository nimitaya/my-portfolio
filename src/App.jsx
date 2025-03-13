import { useEffect, useContext } from "react";
import Dragon from "./components/Dragon";
import StyleDivs from "./components/StyleDivs";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import { LightModeContext } from "./contexts/LightModeContext";
import "./styles/backgrounds.css";
import "./styles/lightmode.css"

function App() {
  const { isLightMode } = useContext(LightModeContext);

  useEffect(() => {
    // Für Dark-Lightmode, wird am Anfang ausgeführt und bei Änderung des isLight
    if (isLightMode) {
      document.body.classList.add("lightmode");
    } else {
      document.body.classList.remove("lightmode");
    }
    
    // Event Listener um Klasse zu Body hinzuzufügen, sobald gescrollt wird
    const handleScroll = () => {
      if (window.scrollY > 100) {
        document.body.classList.add("scroll");
      } else {
        document.body.classList.remove("scroll");
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLightMode]);

  return (
    <>
      <div className="styling-container">
        <StyleDivs />
        <Header />
        <Dragon />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
