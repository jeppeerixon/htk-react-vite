import './settings.scss';
import Userdatainput from "./userdatainput";

const Settings = () => {
    return (
      <div id="userSettings" className="userSettingsDiv">
        <form id="userSettingsInput">
          <Userdatainput />
          <h2>Personbästa:</h2>
          <div>
            <label>Ryck
              <input placeholder="KG" type="number" id="snatchRepMaxValue" />
            </label>
            <label>Stöt
              <input placeholder="KG" type="number" id="cleanRepMaxValue" />
            </label>
          </div>
          <div>
            <label>Bakböj
              <input placeholder="KG" type="number" id="snatchRepMaxValue" />
            </label>
            <label>Frontböj
              <input placeholder="KG" type="number" id="cleanRepMaxValue" />
            </label>
            <label>Marklyft
              <input placeholder="KG" type="number" id="cleanRepMaxValue" />
            </label>
          </div>
          <div>
            <label>Press
              <input placeholder="KG" type="number" id="snatchRepMaxValue" />
            </label>
            <label>Överstöt
              <input placeholder="KG" type="number" id="cleanRepMaxValue" />
            </label>
            <label>Press nacke
              <input placeholder="KG" type="number" id="cleanRepMaxValue" />
            </label>
          </div>
          <div className="btnMode">
            <button>Spara</button>
          </div>
        </form>
      </div>
    )
  };
  
export default Settings;