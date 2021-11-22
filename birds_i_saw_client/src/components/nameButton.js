import React from "react"


const NameButton = ({name, handleButtonSubmit}) => {

    return (
        <div>
             <input type='button' onClick={(e) => handleButtonSubmit(e)} name={name} value={name}></input>
        </div>
    )
}

export default NameButton;