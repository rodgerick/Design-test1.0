import React from "react";
import "../../App.css";
import "./PagesStyles.css";

export default function SignUp() {
  return (
    <>
      <div className="directions">
        <ul>
          <h1>Directions to Hailstone Event Center</h1>
          <p>Deer Hollow Rd, Heber City, UT 84032</p>
          <a
            href="https://goo.gl/maps/HMVVB9vKLcyGyyLH8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="styled--button">DIRECTIONS</button>
          </a>
        </ul>
      </div>
    </>
  );
}
