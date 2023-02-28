import { useState } from "react"

const Weeklyschedule = ( props:
  { name: string, funk: any} ) => {

    return (
        <>
          <button value={ props.name } onClick={props.funk} >{ props.name }</button>         
        </>
    )
}

export default Weeklyschedule