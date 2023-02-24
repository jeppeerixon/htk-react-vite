const Userdatainput = (props:
  { name: string, type: string, id: string, }) => {
    return (
        <>
          <label>{props.name}
            <input placeholder={props.name} type={props.type} id={props.id} />
          </label>
        </>
    )
}

export default Userdatainput