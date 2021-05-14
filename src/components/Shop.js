import React from "react";
import { Loading } from "./Loading";
import { Card, CardImg, CardTitle, CardImgOverlay } from "reactstrap";
import { Link } from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";

function Shop(props) {
  const shop = props.items.items.map((item) => {
    return (
      <div key={item.id} className="col-md-5 m-1">
        <RenderShopItem item={item} />
      </div>
    );
  });

  if (props.items.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
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
    <div className="container">
      <div className="row">{shop}</div>
    </div>
  );
}

function RenderShopItem({ item }) {
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

export default Shop;
