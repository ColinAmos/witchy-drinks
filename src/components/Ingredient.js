import React from "react";

import Draggable from "react-draggable";


const Ingredient = ({ scale, image, handleDragStop }) => {
    return (
        <Draggable scale={scale} onStop={handleDragStop}>
            <img className="ingredient" alt="" src={image} draggable="false"/>
        </Draggable>
    )
}


export default Ingredient;