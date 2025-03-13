import { useContext } from "react";
import { LightModeContext } from "../contexts/LightModeContext";
import "../styles/DarkLightStyle.css"

const DarkLight = () => {
const {isLightMode, setIsLightMode} = useContext(LightModeContext)

  return (
    <div className="toggle-switch">
      <label htmlFor="mode-slider" className="label">
        <input type="checkbox" name="mode-slider" id="mode-slider" className="input" onClick={()=>{ 
          setIsLightMode(!isLightMode)
          console.log(isLightMode);
          
        }}/>
        <span className="slider"></span>
      </label>
    </div>
  );
};
export default DarkLight;
