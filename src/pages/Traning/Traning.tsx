import Weeklyschedule from "./Weeklyschedule";
import "./traning.scss";

export default function Traning() {

  {/* fake variables for now */}
  let weeklyWorkoutsDone: number = 0;
  let weeklyWorkout: Array<boolean> = [false, false, false, false]
  
  return (
    <section id="weekInfo">
      <h2>Veckans pass</h2>
      <p>
        {weeklyWorkoutsDone} av {weeklyWorkout.length} pass slutförda
      </p>
      <p>Klicka på ett pass för att få övningar.</p>
      <Weeklyschedule />
    </section>

  );
}
