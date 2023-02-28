import "./traning.scss";
import Weeklyschedule from "./Weeklyschedule";
import Dayprogram from "./Dayprogram";
import { tisdag, torsdag, passtre, passfyra, weekninename } from "../../data/weeknineprog";
import { useState } from "react";
import Setsandreps from "./Setandreps";


export default function Traning() {

  let weeklyWorkoutsDone: number = 0;
  let weeklyWorkouts: Array<Array<any>> = [tisdag, torsdag, passtre, passfyra]

  const [toggle, setToggle] = useState(false)
  const [toggleOvning, setToggleOvning] = useState(false)
  const [nummer, setNummer] = useState(0)
  const [list, setList] = useState(Object)

  function handleClickDay(e: any) {
    setToggle(!toggle)
    setToggleOvning(false)
    setNummer(weekninename.indexOf(e.target.value));
  }

  function handleClickWorkout(e: any) {
    setToggleOvning(true)
    setList(weeklyWorkouts[nummer][e.target.value]);
  }
  
  return (
    <>
    <section id="weekInfo">
      <h2>VECKANS PASS</h2>
      <p>
        {weeklyWorkoutsDone} av 4 pass slutförda
      </p>
      <p>Klicka på ett pass för att få övningar.</p>
      <div>
      {weekninename.map((passname) => (
          <Weeklyschedule funk={handleClickDay} name={passname}/>
        ))}
      </div>
    </section>
    
    <div>
      {toggle == true && 
      
        weeklyWorkouts[nummer].map(key => (
          
          <Dayprogram funk={handleClickWorkout} id={key.ovningNr} name={key.name}/>
          )) 
      }
    </div>
    
    <div className="repsAndSets">
      {toggleOvning == true &&
      
        <Setsandreps {...list}/>
        
        
      }
    </div>
    </>
  ); 
}
