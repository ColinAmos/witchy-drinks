import React from "react";
import { Button } from "@material-ui/core";

const ResultScreen = ({onButtonClick}) => {
    return (
        <div id="result-screen--blocker">
            <div id="result-screen--window">
                <h1>Result</h1>
                <Button variant="contained" color="primary" onClick={onButtonClick}>Reset</Button>
            </div>
        </div>
        
    )
}


export default ResultScreen;