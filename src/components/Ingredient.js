import React from "react";

import Draggable from "react-draggable";

import { RecipeBook } from "../components";

const Ingredient = ({ image, x, y, index, inCauldron, scale, handleDragStop, handleDragMove, timeToReset }) => {
    let className = "ingredient";
    if (inCauldron) className += " glowing";
    let dragPos;
    if (timeToReset) {
        dragPos = { x: 0, y: 0 };
    }
    else {
        dragPos = null;
    }

    return (
        <Draggable position={dragPos} scale={scale} onStop={(e) => handleDragStop(e, index)} onDrag={(e)=>handleDragMove(e, index)}>
            <div className="ingredient-wrapper" style={{ left: x, top: y }}>
                <img alt="" src={image} id={"ingredient" + index} className={className} draggable="false"/>
                <p className="ingredient--label">{RecipeBook.ingredientNames[index]}</p>
            </div>
        </Draggable>
    )
}


export default Ingredient;