import './settings.scss';

const Settings = () => {
    return (
      <div id="userSettings" className="userSettingsDiv">
        <form id="userSettingsInput">
          <h2>Användar inställningar:</h2>
          <label>Namn:
            <input placeholder="Förnamn" type="text" id="forName" />
          </label>
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