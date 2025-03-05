import "../styles/DarkLightStyle.css"

const DarkLight = () => {
  return (
    <div className="toggle-switch">
      <label htmlFor="mode-slider" className="label">
        <input type="checkbox" name="mode-slider" id="mode-slider" className="input"/>
        <span className="slider"></span>
      </label>
    </div>
  );
};
export default DarkLight;
