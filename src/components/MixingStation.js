import React from "react";

import { Ingredient , ResultScreen } from "../components";

import ingredient__air from "../images/potion__cyan.png";
import ingredient__water from "../images/potion__blue.png";
import ingredient__fire from "../images/potion__orange.png";
import ingredient__plant from "../images/potion__green.png";
import ingredient__animal from "../images/potion__brown.png";
import ingredient__ground from "../images/potion__gray.png";
import cauldron from "../images/cauldron.png";


class MixingStation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scale: 1,
            inCauldron: [false, false, false, false, false, false],
            indexesInCauldron: [],
            resultTime: false,
            timeToReset: false
        }
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
        document.body.addEventListener("touchmove", (e) => {
            e.preventDefault();
        });
    }

    updateDimensions = () => {
        // Scale app area to fit window
        let area = document.getElementById("mixing-station");
        let style = window.getComputedStyle(area);
        let w = parseFloat(style.getPropertyValue("width")) - 1; //-1 to prevent slivers at edges
        let h = parseFloat(style.getPropertyValue("height")) - 1;
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

    pointIsWithinRectangle(point, rectangle) {
        if (point.x >= rectangle.x &&
            point.y >= rectangle.y &&
            point.x <= rectangle.x + rectangle.width &&
            point.y <= rectangle.y + rectangle.height ) {
                return true;
            }
        return false;
    }

    handleDragMove = (e, index) => {
        // Check if ingredient was dropped in cauldron area
        let newArray = this.state.inCauldron;
        if (this.isIngredientWithinCauldronArea(e)) {
            newArray[index] = true;
        }
        else {
            newArray[index] = false;
        }
        this.setState({ inCauldron: newArray });
    }

    handleDragStop = (e, index) => {
        // Check if two ingredients are in cauldron area
        const cauldronArray = this.state.inCauldron;
        let numberInCauldron = 0, indexesInCauldron = [];
        cauldronArray.forEach((value, index) => {
            if (value === true) {
                numberInCauldron++;
                indexesInCauldron.push(index);
            }
        });
        if (numberInCauldron >= 2) {
            // Time to mix!
            this.setState({
                resultTime: true,
                indexesInCauldron: indexesInCauldron
            });
        }
    }

    isIngredientWithinCauldronArea = (e) => {
        const cauldron = document.getElementById("cauldron");
        const point = { x: e.clientX, y: e.clientY };
        const rectangle = cauldron.getBoundingClientRect();
        if (this.pointIsWithinRectangle(point, rectangle)) {
            return true;
        }
        return false;
    }

    resetApp = () => {
        this.setState({
            inCauldron: [false, false, false, false, false, false],
            indexesInCauldron: [],
            resultTime: false,
            timeToReset: true
        });
    }
    
    render() {

        // Create Ingredient components
        const xOff = 7, yOff = 5, xDiff = 30, yDiff = 20;
        const ingredientDataArray =[
            { image: ingredient__air,       x: xOff +  0 + "%",             y: yOff +  0 + "%"},
            { image: ingredient__water,     x: xOff + xDiff + "%",          y: yOff +  0 + "%"},
            { image: ingredient__fire,      x: xOff + xDiff*2 + "%",        y: yOff +  0 + "%"},
            { image: ingredient__plant,     x: xOff +  0 + "%",             y: yOff + yDiff + "%"},
            { image: ingredient__animal,    x: xOff + xDiff + "%",          y: yOff + yDiff + "%"},
            { image: ingredient__ground,    x: xOff + xDiff*2 + "%",        y: yOff + yDiff + "%"}
        ];
        const ingredientComponents = ingredientDataArray.map((data, index) => {
            return <Ingredient timeToReset={this.state.timeToReset} index={index} scale={this.state.scale} inCauldron={this.state.inCauldron[index]} handleDragStop={this.handleDragStop} handleDragMove={this.handleDragMove} image={data.image} x={data.x} y={data.y} key={index}/>
        })

        // Reset positions if needed
        if (this.state.timeToReset === true) {
            this.setState({ timeToReset: false });
        }

        // Render
        return (
            <div id="mixing-station">
                {ingredientComponents}
                <img id="cauldron" src={cauldron} alt="" draggable="false"/>
                <p id="instruction-text">Drag two ingredients into the <br /> cauldron to mix them!</p>
                {this.state.resultTime ? <ResultScreen ingredients={this.state.indexesInCauldron} onButtonClick={this.resetApp}/> : null}
            </div>
        )
    }
    
}


export default MixingStation;