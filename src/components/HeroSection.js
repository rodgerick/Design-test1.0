import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Jonathan & Irene</h1>
      <p>May 20, 2022</p>
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
