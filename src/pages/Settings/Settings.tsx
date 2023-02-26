import './settings.scss';
import Userdatainput from "../../components/Userdatainput";

const Settings = () => {
    return (
      <div id="userSettings" className="userSettingsDiv">
        <form id="userSettingsInput">
          <h2>Användar inställningar:</h2>
          <Userdatainput name="Förnamn" type="text" id="firstName" />
          
          <h2>Personbästa:</h2>
          <div>
          <Userdatainput name="Ryck" type="number" id="snatchRepMaxValue" />
          <Userdatainput name="Stöt" type="number" id="cleanRepMaxValue" />
          </div>
          <div>
            {/* Fler framtida datainputs här */}
          </div>
          <div className="btnMode">
            <button>Spara</button>
          </div>
        </form>
      </div>
    )
  };
  
export default Settings;