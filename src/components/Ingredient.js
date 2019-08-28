import React from "react";

import Draggable from "react-draggable";

const Ingredient = ({ image }) => {

    return (
        <Draggable>
            <img className="ingredient" alt="" src={ image } draggable="false"/>
        </Draggable>
        
    )
}

export default Ingredient;