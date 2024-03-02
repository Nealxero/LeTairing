import React from "react";
import "../../styles/instructions.css";
import sandwich from "../../img/sandwichBar.jpg";

export const InstructionsComponent = () => {
    return (
        <div className="instructions-container">
        <div className="row">
          <div className="left">
            <img src={sandwich} alt="Step 1 Image" />
          </div>
          <div className="right">
            <p>Step 1: Description of the first step</p>
          </div>
        </div>
        <div className="row">
          <div className="right">
            <p>Step 2: Description of the second step</p>
          </div>
          <div className="left">
            <img src={sandwich} alt="Step 2 Image" />
          </div>
        </div>
        <div className="row">
          <div className="left">
            <img src={sandwich} alt="Step 3 Image" />
          </div>
          <div className="right">
            <p>Step 3: Description of the third step</p>
          </div>
        </div>
      </div>
    );
  };