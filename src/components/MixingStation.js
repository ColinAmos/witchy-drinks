import React from "react";

import Ingredient from "./Ingredient";
import ingredientImage from "../images/placeholder-ingredient.png";

class MixingStation extends React.Component {
    render() {
        return (
            <div className="mixing-station-wrapper">
                <div className="mixing-station">
                    {/* <div className="ingredient-shelf">

                    </div> */}
                    <Ingredient image={ingredientImage}/>
                    <Ingredient image={ingredientImage}/>
                    <Ingredient image={ingredientImage}/>
                    <Ingredient image={ingredientImage}/>
                    <Ingredient image={ingredientImage}/>
                    <Ingredient image={ingredientImage}/>
                </div> 
            </div>
            
        )
    }
}

export default MixingStation;