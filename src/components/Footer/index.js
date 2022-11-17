import React from "react";
import { Footerdiv } from "./Footer";

const Footer = () => {
  return (
    <>
      <Footerdiv>
        <footer>
          <div className="footer-content">
            <h3>Dr. Pechincha</h3>
            <h5> <a href="/"> Fale com a gente </a> </h5>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
              anim id est laborum.
            </p>
            {/* <ul className="socials">
              <li>
                <a href="/">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-linkedin-square"></i>
                </a>
              </li>
            </ul> */}
          </div>
          <div className="footer-bottom">
            <p>
              copyright &copy;2022 <a href="/">Dr. Pechincha</a>{" "}
            </p>
          </div>
        </footer>
      </Footerdiv>
    </>
  );
};
export default Footer;
