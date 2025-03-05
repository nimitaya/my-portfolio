import { useEffect } from "react";
import Header from "./pages/Header";

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
      <h1>Test</h1>
    </>
  );
}

export default App;
