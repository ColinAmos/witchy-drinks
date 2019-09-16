import React from "react";

import backgroundImage from "../images/placeholder-background-image.jpg";

const Background = () => {
    return(
        <img id="background-image" src={ backgroundImage } alt="" draggable={false}/>
    )
}

export default Background;