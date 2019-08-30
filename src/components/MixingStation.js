import React from "react";

import { Ingredient } from "../components";

import ingredient__air from "../images/potion__cyan.png";
import ingredient__water from "../images/potion__blue.png";
import ingredient__sun from "../images/potion__orange.png";
import ingredient__plant from "../images/potion__green.png";
import ingredient__animal from "../images/potion__brown.png";
import ingredient__ground from "../images/potion__gray.png";
import cauldron from "../images/cauldron.png";


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

        // Create Ingredient components
        const ingredientDataArray =[
            { image: ingredient__air,       x: "5%",    y: "5%"},
            { image: ingredient__water,     x: "35%",   y: "5%"},
            { image: ingredient__sun,       x: "65%",   y: "5%"},
            { image: ingredient__plant,     x: "5%",    y: "25%"},
            { image: ingredient__animal,    x: "35%",   y: "25%"},
            { image: ingredient__ground,    x: "65%",   y: "25%"}
        ];
        const ingredientComponents = ingredientDataArray.map((data, index) => {
            return <Ingredient scale={this.state.scale} handleDragStop={this.handleDragStop} image={data.image} x={data.x} y={data.y} key={index}/>
        })

        return (
            <div id="mixing-station-wrapper">
                <div id="mixing-station">
                    {ingredientComponents}
                    <img id="cauldron" src={cauldron} alt="" draggable="false"/>
                </div>
            </div>
        )
    }
    
}


export default MixingStation;