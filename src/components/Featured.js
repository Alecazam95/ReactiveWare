import React from "react";
import { Loading } from "./Loading";
import {
  Card,
  CardImg,
  CardTitle,
  CardImgOverlay,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";

function Featured(props) {
  const featuredItems = props.items.items
    .filter((items) => items.featured === true)
    .map((item) => {
      return (
        <div className="col-md-4 m-1">
          <FeaturedItem item={item} />
        </div>
      );
    });

  if (props.items.isLoading) {
    return (
      <div className="container mt-5">
        <div className="row">
          <hr />
          <hr />
          <Loading className="mt-5" />
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
    <div className="container mt-5">
      <div className="row">
        <div className="col mt-5">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Featured</BreadcrumbItem>
          </Breadcrumb>
          <h2>Featured</h2>
          <hr />
        </div>
      </div>
      <div className="row">{featuredItems}</div>
    </div>
  );
}

function FeaturedItem({ item }) {
  return (
    <Card>
      <Link to={`/shop/${item.id}`}>
        <CardImg width="100%" src={baseUrl + item.image} alt={item.name} />
        <CardImgOverlay>
          <CardTitle>{item.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

export default Featured;
