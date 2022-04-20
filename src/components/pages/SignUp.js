import React from "react";
import "../../App.css";
import "./PagesStyles.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="sign-up">
        <Link to="/">
          <button class="styled-btn--outline">TO MAIN PAGE</button>
        </Link>
      </div>
    </>
  );
}
