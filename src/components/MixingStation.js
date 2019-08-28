import React from "react";

import Ingredient from "./Ingredient";
import ingredientImage from "../images/placeholder-ingredient.png";

class MixingStation extends React.Component {
    render() {
        return (
            <div className="ingredients">
                <Ingredient image={ingredientImage}/>
                <Ingredient />
                <Ingredient />
                <Ingredient />
                <Ingredient />
                <Ingredient />
            </div> 
        )
    }
}

export default MixingStation;