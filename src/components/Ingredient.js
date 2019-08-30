import React from "react";

import Draggable from "react-draggable";


const Ingredient = ({ scale, image, x, y, handleDragStop }) => {
    return (
        <Draggable scale={scale} onStop={handleDragStop}>
            <img className="ingredient" alt="" src={image} style={{ left: x, top: y }} draggable="false"/>
        </Draggable>
    )
}


export default Ingredient;