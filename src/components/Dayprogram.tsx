import { useState } from "react"

const Dayprogram = ( props:
  { name: string, id: number, funk: any} ) => {

    return (
        <>
          <button value={ props.id } onClick={props.funk} >{ props.name }</button>         
        </>
    )
}

export default Dayprogram