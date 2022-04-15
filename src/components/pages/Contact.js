import React from "react";
import "../../App.css";

export default function Contact() {
  return (
    <>
      <div className="contact">
        <ul>
          <h1>Venmo & Registry</h1>
          <p>
            Donate to the happy couples honeymoon fund! <br />
            Or feel free to get them a gift!
          </p>
          <a
            href="https://account.venmo.com/u/Jonathan-Heninger"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="styled--button">VENMO</button>
          </a>
          <a
            href="https://www.target.com/gift-registry/gift-giver?registryId=fa5e4910-b117-11ec-94cb-bba1f2cdf975&type=WEDDING"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="styled--button">REGISTRY</button>
          </a>
        </ul>
      </div>
    </>
  );
}
