import { useState } from "react";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);      
    };

  return (
    <nav>
      {/* Mobile Navigation */}
      <div className="mobile-dropdown">
        <div tabIndex={0} role="button" className="mobile-btn" onClick={toggleMenu} onKeyDown={toggleMenu}>
          {/* SVG for Button */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />{" "}
          </svg>
        </div>
        <div className="helper-div"></div>
        <ul tabIndex={0} className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      {/* Desktop Navigation */}
      <div className="desktop-nav">
        <ul tabIndex={0} className="desktop-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
