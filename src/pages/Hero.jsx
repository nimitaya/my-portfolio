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
      <div className="hero-img-container">
        <img src="./DragonAvatar.jpeg" alt="" className="hero-img" />
      </div>
    </section>
  );
};
export default Hero;
