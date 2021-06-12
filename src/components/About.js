import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { FadeTransform } from "react-animation-components";

function About(props) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col mt-5">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>About Us</BreadcrumbItem>
          </Breadcrumb>
          <h1>About Us</h1>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <blockquote className="blockquote text-center card-body">
          <div className="container">
            <FadeTransform in>
              <h2 className="mb-4 mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h2>
              <footer className="blockquote-footer">
                Alec Williams,
                <br />
                <cite title="Source Title">The guy who made ReactiveWare</cite>
              </footer>
            </FadeTransform>
          </div>
        </blockquote>
      </div>
    </div>
  );
}

export default About;
