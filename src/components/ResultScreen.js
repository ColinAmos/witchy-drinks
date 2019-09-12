import React from "react";
import { Paper } from "@material-ui/core";

import { RecipeBook } from "../components";

import image_mask from "../images/potion-mask.png";

const ResultScreen = ({ ingredients, onButtonClick }) => {
    // Look for recipe in recipe book
    let recipeResult = RecipeBook.getResultFromIngredients(ingredients[0], ingredients[1]);

    // Make image mask style
    const maskStyle = {
        maskImage: `url(${image_mask})`,
        WebkitMaskImage: `url(${image_mask})`,
        maskSize: "100%",
        WebkitMaskSize: "100%"
    }

    return (
        <div id="result-screen--blocker">
            <Paper elevation={16} id="result-screen--window">
                <p className="result-screen--title">{recipeResult.title}</p>
                <p className="result-screen--ingredients">({recipeResult.ingredients})</p>
                <div className="result-screen--image">
                    <img className="result-screen--image--base" alt="" src={RecipeBook.ingredientImages[ingredients[0]]} draggable={false} />
                    <img className="result-screen--image--masked" style={maskStyle} alt="" src={RecipeBook.ingredientImages[ingredients[1]]} draggable={false}/>
                </div>
                <p className="result-screen--description"><i>{recipeResult.description}</i></p>
                <button className="result-screen--button" onClick={onButtonClick}>Reset</button>
            </Paper>
        </div>
        
    )
}


export default ResultScreen;