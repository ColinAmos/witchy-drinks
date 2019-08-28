import React from "react";

import Ingredient from "./Ingredient";

class MixingStation extends React.Component {
    render() {
        return (
            <div className="ingredients">
                <Ingredient image=""/>
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