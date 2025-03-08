import { expertises } from "../assets/data.js";
import "../styles/Expertise.css";

const Expertise = () => {
  return (
    <section className="section-expertise scroll-offset" id="expertise">
      <div className="expertise-text">
        <h2>My Expertise</h2>

        <div className="expertise-cards-container">
          {Object.keys(expertises).map((expertise, i) => {
            return (
              <div className="expertise-card" key={i + expertise}>
                <h4>{expertise}</h4>
                <img
                  src={`./icons/icon-${expertise}.svg`}
                  alt={`small picture, representing ${expertise} card`}
                />
                <ul>
                  {expertises[expertise].map((info, i) => (
                    <li key={i + info}>{info}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Expertise;
