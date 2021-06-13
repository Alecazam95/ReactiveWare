import React from "react";
import {
  Button,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
} from "reactstrap";
import { Loading } from "./Loading";
import { Link } from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from "react-animation-components";

function FeaturedItem({ item }) {
  return (
    <Card>
      <Link to={`/shop/${item.id}`}>
        <CardImg width="100%" src={baseUrl + item.image} alt={item.name} />
        <CardImgOverlay>
          <CardTitle tag="h5">{item.name}</CardTitle>
          <CardText>{item.description}</CardText>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

function Home(props) {
  const featuredItems = props.items.items
    .filter((items) => items.featured === true)
    .map((item) => {
      return (
        <div className="col-md-3 mb-5 m-1">
          <FeaturedItem item={item} />
        </div>
      );
    });

  if (props.items.isLoading) {
    return (
      <div className="container mt-5">
        <div
          className="row flex justify-content-center"
          style={{ marginLeft: "550px" }}
        >
          <div className="col">
            <hr />
            <hr />
            <Loading />
          </div>
        </div>
      </div>
    );
  }

  if (props.items.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>{props.items.errMess}</h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="container-fluid mt-5">
        <div className="row flex align-self-center">
          <div className="col-3 mt-5">
            <hr />
          </div>
        </div>
        <div className="row flex justify-content-center">{featuredItems}</div>
      </div>

      <div className="container-fluid">
        <div
          className="row row-content flex justify-content-center align-items-center p-5"
          style={{
            backgroundColor: "#fff",
          }}
        >
          <div className="col-sm-6">
            <FadeTransform
              in
              transformProps={{
                exitTransform: "translateX(-25%)",
              }}
            >
              <h1
                style={{
                  color: "#000",
                  marginBottom: "30px",
                  marginLeft: "200px",
                }}
              >
                About us
              </h1>
              <p
                style={{
                  color: "#000",
                  marginLeft: "200px",
                  marginBottom: "40px",
                }}
              >
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
                style={{ marginLeft: "200px" }}
              >
                About Us
              </Button>
            </FadeTransform>
          </div>
          <div className="col text-center" style={{ marginRight: "-80px" }}>
            <div className="media ml-m-4">
              <FadeTransform in>
                <img
                  className="flex img-thumbnail ml-5 ml-lg-5 border-0"
                  src="/assets/images/ReactiveWare.png"
                  width="500"
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
      </div>

      <div className="container-fluid">
        <div className="row flex flex-row-reverse row-content align-items-center p-5">
          <div className="col-sm-6 col-sm-text-right">
            <FadeTransform
              in
              transformProps={{
                exitTransform: "translateX(25%)",
              }}
            >
              <h1>Where it all comes from</h1>
              <p style={{ marginRight: "250px", marginBottom: "40px" }}>
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
                  class="flex mt-0 mb-0 img-thumbnail"
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
