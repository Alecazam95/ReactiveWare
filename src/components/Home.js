import React from "react";
import { Button } from "reactstrap";
import { FadeTransform } from "react-animation-components";

function Home(props) {
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row row-content align-items-center">
          <div className="col-sm-7">
            <FadeTransform
              in
              transformProps={{
                exitTransform: "translateX(-100%)",
              }}
            >
              <h2>About us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Button
                className="btn btn-lg btn-dark d-none d-sm-inline"
                href="/aboutus"
              >
                About Us
              </Button>
            </FadeTransform>
          </div>
          <div className="col text-center">
            <div className="media ml-2 ml-m-5">
              <FadeTransform in>
                <img
                  className="d-flex img-thumbnail ml-3 ml-lg-5 border-0"
                  src="/assets/images/ReactiveWare.png"
                  width="300"
                  alt="About Us"
                />
              </FadeTransform>
            </div>
            <Button
              className="btn btn-lg btn-dark f-sm-ml-3 d-sm-none mt-3"
              href="/aboutus"
            >
              About Us
            </Button>
          </div>
        </div>

        <div className="row flex-row flex-row-reverse row-content align-items-center">
          <div className="col-sm-7 col-sm-text-right">
            <FadeTransform
              in
              transformProps={{
                exitTransform: "translateX(200%)",
              }}
            >
              <h2>Where it all comes from</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Button
                color="dark"
                className="btn btn-lg float-md-right mr-5 d-none d-sm-inline"
                href="/info"
              >
                Info
              </Button>
            </FadeTransform>
          </div>
          <div className="col text-center">
            <div className="media">
              <FadeTransform in>
                <img
                  class="d-flex mr-3 img-thumbnail"
                  src="/assets/images/clothing-dark.jpg"
                  width="400"
                  alt="Where it comes from"
                />
              </FadeTransform>
            </div>
            <Button
              color="dark"
              className="btn btn-lg float-md-right d-sm-none mt-3"
              href="info.html"
            >
              Info
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
