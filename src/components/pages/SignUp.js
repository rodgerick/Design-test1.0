import React from "react";
import "../../App.css";
import { button } from "../Button";


export default function SignUp() {
  return (
    <>
      <div className="sign-up-div">
        <h1 className="sign-up">
          Address:
          <a
            href="https://goo.gl/maps/DYZyzKxY4nsJjs916"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
            >
            DIRECTIONS
            </button>
          </a>
        </h1>
        
      </div>
    </>
  );
}
