import React from "react";

import Draggable from "react-draggable";


const Ingredient = ({ image, x, y, index, inCauldron, scale, handleDragStop, handleDragMove }) => {
    let effectStyle = { display: "none" }
    if (inCauldron) {
        effectStyle.display = "block";
    }
    return (
        <Draggable scale={scale} onStop={(e) => handleDragStop(e, index)} onDrag={(e)=>handleDragMove(e, index)}>
            <div className="ingredient-wrapper" style={{ left: x, top: y }}>
                <img alt="" src={image} id={"ingredient" + index} className={"ingredient"} draggable="false"/>
                <div className="ingredient--in-cauldron-effect" style={effectStyle}/>
            </div>
        </Draggable>
    )
}


export default Ingredient;