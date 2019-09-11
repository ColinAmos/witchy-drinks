import React from "react";
import { Button, Paper } from "@material-ui/core";

import { RecipeBook } from "../components";


const ResultScreen = ({ ingredients, onButtonClick }) => {
    // Look for recipe in recipe book
    let recipeResult = RecipeBook.getResultFromIngredients(ingredients[0], ingredients[1]);

    return (
        <div id="result-screen--blocker">
            <Paper elevation={16} id="result-screen--window">
                <h3>{recipeResult.title}</h3>
                <Button className="result-screen--button" variant="contained" color="primary" onClick={onButtonClick}>Reset</Button>
            </Paper>
        </div>
        
    )
}


export default ResultScreen;