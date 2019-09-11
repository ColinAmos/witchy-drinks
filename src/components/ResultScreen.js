import React from "react";
import { Button } from "@material-ui/core";

import { RecipeBook } from "../components";

const ResultScreen = ({ ingredients, onButtonClick }) => {
    // Look for recipe in recipe book
    let recipeResult = RecipeBook.getResultFromIngredients(ingredients[0], ingredients[1]);

    return (
        <div id="result-screen--blocker">
            <div id="result-screen--window">
                <h3>Result: {recipeResult}</h3>
                <Button variant="contained" color="primary" onClick={onButtonClick}>Reset</Button>
            </div>
        </div>
        
    )
}


export default ResultScreen;