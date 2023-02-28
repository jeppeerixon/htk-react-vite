import { ReactNode, useState } from "react"

const Setsandreps = ( props:
  { name: string,
    percent: Array<number>,
    reps: Array<number>,
    setsDone: Array<boolean>,
    description: string,
    done: boolean,
    TypeOfPr: string,
    ovningNr: number } ) => {

    let repsandsets: any = [];

    for (let i = 0; i < props.percent.length ; i++) {
      repsandsets.push(<button>{props.reps[i]}reps @{Math.round(100 * (props.percent[i]/100))}kg {props.percent[i]}%</button>);
    }

    return (
        <>
          { repsandsets }          
        </>
    )
}

export default Setsandreps