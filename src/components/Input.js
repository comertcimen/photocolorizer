import React from "react";

const Input = ({onInputChange, onButtonSubmit}) => {
    return(
        <div className="input">
            <input type="text" placeholder="Enter photo link" onChange={onInputChange}/>
            <button onClick={onButtonSubmit}>Colorize!</button>
        </div>
    )
}

export default Input;