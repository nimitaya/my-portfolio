import { useEffect } from "react";
import Header from "./pages/Header";
import Main from "./pages/Main";

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
      <Header />
      <Main/>
    </>
  );
}

export default App;
