import React from "react";
import "../../App.css";
import "./PagesButton.css";

export default function SignUp() {
  return (
    <>
      <div className="sign-up">
        <ul>
          <h1>Directions to the Venue: </h1>
          <p>Deer Hollow Rd, Heber City, UT 84032</p>
          <a
            href="https://goo.gl/maps/DYZyzKxY4nsJjs916"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="styled--button" >DIRECTIONS</button>
          </a>
        </ul>
      </div>
    </>
  );
}
