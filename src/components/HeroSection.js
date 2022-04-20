import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Jonathan & Irene</h1>
      <p>May 20, 2022</p>
      <h2>Please R.S.V.P. by May 6</h2>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          DIRECTIONS
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
