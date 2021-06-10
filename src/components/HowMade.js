import React from "react";
import { Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FadeTransform } from "react-animation-components";

function HowMade(props) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col mt-5">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>How It's Made</BreadcrumbItem>
          </Breadcrumb>

          <h1>How It's Made</h1>
          <hr />
        </div>
      </div>
      <FadeTransform
        in
        transformProps={{
          exitTransform: "translateX(-25%)",
        }}
      >
        <div className="row row-content align-items-center">
          <div className="col-sm-7">
            <h1>Step 1</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col text-center">
            <div className="media ml-2 ml-m-5">
              <img
                className="d-flex img-thumbnail ml-3 ml-lg-5 border-0"
                src="/assets/images/ReactiveWare.png"
                width="300"
                alt="About Us"
              />
            </div>
            <Button
              className="btn btn-lg btn-dark f-sm-ml-3 d-sm-none mt-3"
              href="/aboutus"
            >
              About Us
            </Button>
          </div>
        </div>
      </FadeTransform>

      <FadeTransform
        in
        transformProps={{
          exitTransform: "translateX(25%)",
        }}
      >
        <div className="row flex-row flex-row-reverse row-content align-items-center">
          <div className="col-sm-7 col-sm-text-right">
            <h1>Step 2</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col text-center">
            <div className="media">
              <img
                class="d-flex mr-3 img-thumbnail"
                src="/assets/images/ReactiveWare.png"
                width="400"
                alt="Where it comes from"
              />
            </div>
          </div>
        </div>
      </FadeTransform>

      <FadeTransform
        in
        transformProps={{
          exitTransform: "translateX(-25%)",
        }}
      >
        <div className="row row-content align-items-center">
          <div className="col-sm-7">
            <h1>Step 3</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col text-center">
            <div className="media ml-2 ml-m-5">
              <img
                className="d-flex img-thumbnail ml-3 ml-lg-5 border-0"
                src="/assets/images/ReactiveWare.png"
                width="300"
                alt="About Us"
              />
            </div>
            <Button
              className="btn btn-lg btn-dark f-sm-ml-3 d-sm-none mt-3"
              href="/aboutus"
            >
              About Us
            </Button>
          </div>
        </div>
      </FadeTransform>
    </div>
  );
}

export default HowMade;
