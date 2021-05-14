import React from "react";
import { Jumbotron } from "reactstrap";

function Jumbo(props) {
  return (
    <Jumbotron
      className="rounded-0"
      style={{
        backgroundImage: `url(assets/images/jumbo-bread.jpeg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <br /> <br />
      <div className="container">
        <div className="row text-center mt-5">
          <div className="col-12">
            <h1 className="display-4 text-white mt-5">Gears & Grains</h1>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
}

export default Jumbo;
