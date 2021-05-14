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
                  src="/assets/ReactiveWare.png"
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
                We believe in transparency, click the button below to find out
                how we make our clothes from start to finish.
              </p>
              <Button
                color="dark"
                className="btn btn-lg float-md-right mr-5 d-none d-sm-inline"
                href="/menu"
              >
                Menu
              </Button>
            </FadeTransform>
          </div>
          <div className="col text-center">
            <div className="media">
              <FadeTransform in>
                <img
                  class="d-flex mr-3 img-thumbnail border-0"
                  src="/assets/images/breadPatrickOne.jpg"
                  width="400"
                  alt="Where it comes from"
                />
              </FadeTransform>
            </div>
            <Button
              color="dark"
              className="btn btn-lg float-md-right d-sm-none mt-3"
              href="menu.html"
            >
              Menu
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
