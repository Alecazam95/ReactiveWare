import React from "react";
import { Link } from "react-router-dom";
import { FadeTransform } from "react-animation-components";

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <FadeTransform
          in
          transformProps={{
            exitTransform: "translateY(75%)",
          }}
        >
          <div className="row flex justify-content-center">
            <div className="col-4 col-sm-2 offset-2">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li>
                  <li>
                    <Link to="/home" style={{ color: "#FFF" }}>
                      Home
                    </Link>
                  </li>
                  <Link to="/aboutus" style={{ color: "#FFF" }}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/shop" style={{ color: "#FFF" }}>
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/howitsmade" style={{ color: "#FFF" }}>
                    How It's Made
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-4 text-center">
              <h5>Social</h5>
              <a
                className="btn btn-social-icon btn-instagram"
                href="http://instagram.com/"
              >
                <i className="fa fa-instagram" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/"
              >
                <i className="fa fa-facebook" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter" />
              </a>{" "}
            </div>
            <div className="col-sm-4 text-center">
              <h5>Contact Us</h5>
              <Link
                role="button"
                className="btn btn-link"
                href="tel:+12065551234"
                style={{ color: "#FFF" }}
              >
                <i className="fa fa-phone" /> 1-800-555-5555
              </Link>
              <br />
              <Link
                role="button"
                className="btn btn-link"
                href="mailto:Bread@G&G.com"
                style={{ color: "#FFF" }}
              >
                <i className="fa fa-envelope-o" /> support@ReactiveWare.com
              </Link>
            </div>
          </div>
        </FadeTransform>
      </div>
    </footer>
  );
}

export default Footer;
