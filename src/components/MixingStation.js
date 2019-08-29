import React from "react";

import { Ingredient } from "../components";
import ingredientImage from "../images/placeholder-ingredient.png";


class MixingStation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scale: 1
        }
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    updateDimensions = () => {
        // Scale app area to fit window
        let area = document.getElementById("mixing-station");
        let style = window.getComputedStyle(area);
        let w = parseFloat(style.getPropertyValue("width"));
        let h = parseFloat(style.getPropertyValue("height"));
        let newScale = Math.min(
            (window.innerWidth/w),
            (window.innerHeight/h)
        )
        // Scale active content area
        if (area) area.style.transform = "translate(-50%, -50%) scale(" + newScale + ") ";
        // Save scale in state
        this.setState({
            scale: newScale
        })
    }

    handleDragStop = () => {
        // Do something when an ingredient is dropped
    }
    
    render() {
        return (
            <div id="mixing-station-wrapper">
                <div id="mixing-station">
                    <Ingredient scale={this.state.scale} handleDragStop={this.handleDragStop} image={ingredientImage}/>
                    <Ingredient scale={this.state.scale} handleDragStop={this.handleDragStop} image={ingredientImage}/>
                    <Ingredient scale={this.state.scale} handleDragStop={this.handleDragStop} image={ingredientImage}/>
                </div> 

            </div>
        )
    }
    
}


export default MixingStation;