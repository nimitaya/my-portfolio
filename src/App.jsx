import { useEffect } from "react";
import Dragon from "./components/Dragon";
import StyleDivs from "./components/StyleDivs";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import "./styles/backgrounds.css";

function App() {
  // Event Listener um Klasse zu Body hinzuzufügen, sobald gescrollt wird
  useEffect(() => {
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
  }, []);

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
