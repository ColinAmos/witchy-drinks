import React from "react";

import Ingredient from "./Ingredient";
import ingredientImage from "../images/placeholder-ingredient.png";



class MixingStation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            boundsW: 16,
            boundsH: 9
        }
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    updateDimensions = () => {
        // Keep aspect ratio
        let boundsW, boundsH;
        const aspectRatioW = 9, aspectRatioH = 16;
        // Detect window orientation
        if (window.innerHeight*aspectRatioW < window.innerWidth*aspectRatioH) {
            // Window is landscape
            boundsH = window.innerHeight;
            boundsW = boundsH * aspectRatioW/aspectRatioH;
        }
        else {
            // Window is portrait
            boundsW = window.innerWidth;
            boundsH = boundsW * aspectRatioH/aspectRatioW;
        }
        this.setState({
            boundsW: boundsW,
            boundsH: boundsH
        })
    }

    render() {
        return (
            <div className="mixing-station-wrapper">
                <div className="mixing-station" style={{ width: this.state.boundsW, height: this.state.boundsH }}>
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