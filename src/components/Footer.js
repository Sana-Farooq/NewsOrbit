import React, { Component } from "react";
import logoNewsOrbit from "../asset/logoNewsOrbit.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";


export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center text-lg-start text-center">
            <div className="col-lg-3 mb-3 d-flex justify-content-lg-start justify-content-center">
              <img className="footer-logo" src={logoNewsOrbit} alt="News Orbit Logo" />
            </div>
            <div className="col-lg-5 mb-3">
              <h6 className="footer-title">About Us</h6>
              <p className="footer-text">
                Serving the nation since 1947 by providing an accurate, objective, uninterrupted flow of news to the people, the national news service is pursuing a comprehensive strategy to transform the existing news operations into a forward-looking service – APP Digital for its diverse subscriber-base and the public.
              </p>
            </div>
            <div className="col-lg-4 mb-3 d-flex justify-content-lg-end justify-content-center">
              <div className="followUs"><p >Follow us on:</p>
                <div className="SocialLinks"> <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                  className="text-white mx-2">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom col text-center mt-3">
          <div><p className="bottom-line">&copy; {new Date().getFullYear()} NewsOrbit. All rights reserved.</p></div>
          <div><ul>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>FAQ</li>
            <li>Disclaimer</li>
            <li>Refund Policy</li>
          </ul>
          </div>
        </div>
      </footer>
    );
  }
}
