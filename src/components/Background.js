import React from "react";

import backgroundImage from "../images/placeholder-background-image.jpg";

const Background = () => {
    return(
        <React.Fragment>
            
            <img id="background-image" src={ backgroundImage } alt="" draggable={false}/>
            <div id="background-image--cover"></div>
        </React.Fragment>
        
    )
}

export default Background;