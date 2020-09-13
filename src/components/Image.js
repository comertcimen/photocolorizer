import React from "react";

const Image = ({output}) => {
    return(
        <div className="image">
            <img src={output} alt=""/>
        </div>
    )
}

export default Image;