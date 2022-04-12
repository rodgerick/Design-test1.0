import React from "react";
import { Link } from "react-router-dom";
// import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          something here if you want a footer
        </p>
        <p className="footer-subscription-text">
          something else here
        </p>
        <div className="input-areas">
          {/* <form>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form> */}
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>IDK</h2>
            <Link to="/sign-up">marragea and such</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/contact">Careers</Link>
            <Link to="/about">Investors</Link>
            <Link to="/">Terms and Conditions</Link>
          </div>
          <div class="footer-link-items">
            <h2>what to</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>put</h2>
              <Link to="/">Submit Video</Link>
              <Link to="/">Ambassadors</Link>
              <Link to="/">Agency</Link>
              <Link to="/">Influencer</Link>
            </div>
            <div class="footer-link-items">
              <h2>here</h2>
              <Link
                to={{
                  pathname: "https://www.youtube.com/watch?v=T-VqfCMUtYA",
                }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                Instagram
              </Link>
              <Link
                to={{
                  pathname:
                    "https://i.chzbgr.com/full/9644236032/h63E43478/because-zuckerberg-never-meta-girl-until-college-929-pm-oct-28-2021-1048k-496-share-this-tweet",
                }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                Facebook
              </Link>
              <Link
                to={{ pathname: "https://www.youtube.com/watch?v=avTCxNbF8jI" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
              >
                Youtube
              </Link>
              <Link
                to={{ pathname: "https://twitter.com/?lang=fr" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              J&I
              <i className="fas fa-heart" />
            </Link>
          </div>
          <small className="website-rights">Rodgerick &#169; 2022</small>
          <div className="social-icons">
            <Link
              to={{
                pathname: "https://www.youtube.com/watch?v=0jXTBAGv9ZQ",
              }}
              className="social-icon-link-apple"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apple"
            >
              <i className="fa fa-apple" />
            </Link>
            <Link
              to={{
                pathname:
                  "https://i.chzbgr.com/full/9644236032/h63E43478/because-zuckerberg-never-meta-girl-until-college-929-pm-oct-28-2021-1048k-496-share-this-tweet",
              }}
              className="social-icon-link-facebook"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fa fa-facebook" />
            </Link>

            <Link
              to={{
                pathname: "https://www.youtube.com/watch?v=fNG75ZXE9VQ",
              }}
              className="social-icon-link-twitter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fa fa-twitter" />
            </Link>
            <Link
              to={{
                pathname: "https://www.youtube.com/watch?v=T-VqfCMUtYA",
              }}
              className="social-icon-link-instagram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fa fa-instagram" />
            </Link>
            <Link
              to={{
                pathname: "https://www.youtube.com/watch?v=avTCxNbF8jI",
              }}
              className="social-icon-link-youtube"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <i className="fa fa-youtube" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
