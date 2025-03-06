import "../styles/About.css"

const About = () => {
  return (
    <section className="section-about" id="about">
      <div className="about-text">
        <h2>About me</h2>
        <p>
          I’m an aspiring <span className="emph">front-end web developer</span>{" "}
          currently studying at DCI in Germany, with a passion for crafting
          visually appealing, user-centric websites. I love the logic of coding
          and the satisfaction of watching my ideas come to life on the screen.
        </p>
        <p>
          When I’m not immersed in code, you can find me diving into roleplaying
          games—both online and offline—or enjoying a good board game. My{" "}
          <span className="emph">fascination with dragons</span>, the mysteries
          of the universe, and timeless classics like{" "}
          <span className="italic">Alice in Wonderland</span> continually
          inspire my creativity and drive to innovate.
        </p>
      </div>
    </section>
  );
};
export default About;
