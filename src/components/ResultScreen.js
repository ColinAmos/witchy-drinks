import React from "react";
import { Paper } from "@material-ui/core";

import { RecipeBook } from "../components";

import ingredient__air from "../images/potion__cyan.png";


const ResultScreen = ({ ingredients, onButtonClick }) => {
    // Look for recipe in recipe book
    let recipeResult = RecipeBook.getResultFromIngredients(ingredients[0], ingredients[1]);

    return (
        <div id="result-screen--blocker">
            <Paper elevation={16} id="result-screen--window">
                <p className="result-screen--title">{recipeResult.title}</p>
                <p className="result-screen--ingredients">({recipeResult.ingredients})</p>
                <img className="result-screen--image" alt="" src={ingredient__air} />
                <p className="result-screen--description"><i>{recipeResult.description}</i></p>
                <button className="result-screen--button" onClick={onButtonClick}>Reset</button>
            </Paper>
        </div>
        
    )
}


export default ResultScreen;