import Button from "../components/Button";
import "../styles/Hero.css"

const Hero = () => {
  return (
    <section className="section-hero">
      <div className="hero-text">
        <h1>Greetings, I'm Nimitaya</h1>
        <p className="hero-text-secondary">
          Aspiring <span className="emph">Front-End Developer</span>, based in Germany.
        </p>
        <p className="hero-text-secondary">Let's get in touch!</p>
      </div>
      <div className="hero-btns">
      <Button insert="Contact me" target="#contact" classN="btn btn-primary"/>
      <Button insert="About me" target="#about" classN="btn btn-secondary" />
      </div>
      <div className="hero-img-container">
        <img src="./DragonAvatar.jpeg" alt="" className="hero-img" />
      </div>
    </section>
  );
};
export default Hero;
