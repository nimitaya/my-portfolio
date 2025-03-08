import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer>
      <p>© Copyright {new Date().getFullYear()} Nimitaya</p>
      <a href="#"><img src="./icons/dragon-icon.png" alt="logo dragon" className="dragon-logo"/></a>
      {/* <p>Nimitaya</p> */}

      <aside className="footer-contact">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="./icons/github.svg" alt="Link to my GitHub Profile" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="./icons/linkedin.svg" alt="Link to my LinkedIn Profile" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="./icons/discord.svg" alt="Link to my Discord Profile" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="./icons/instagram.svg" alt="Link to my Instagram Profile" />
        </a>
      </aside>
    </footer>
  );
};
export default Footer;
