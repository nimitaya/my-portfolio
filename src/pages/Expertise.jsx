import { expertises } from "../assets/data.js";
import "../styles/Expertise.css";

const Expertise = () => {
  return (
    <section className="section-expertise" id="expertise">
      <div className="expertise-text">
        <h2>My Expertise</h2>

        <div className="expertise-cards-container">
          {Object.keys(expertises).map((expertise, i) => {
            return (
              <div className="expertise-card" key={i + expertise}>
                <h4>{expertise}</h4>
                <p>Logo</p>
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
