import { useEffect } from "react";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import "./styles/backgrounds.css"

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
      <div className="background-gradient-1"></div>
      <div className="wave-divider-1"></div>
      <div className="wave-divider-2"></div>
      <div className="background-gradient-2"></div>
      <div className="wave-divider-3"></div>
      <div className="wave-divider-4"></div>
      <div className="background-gradient-3"></div>
      <div className="wave-divider-5"></div>
      <Header />
      <Main />
      <Footer />
    </div>
    </>
  );
}

export default App;
