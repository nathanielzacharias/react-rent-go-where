import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ControlledCarousel from "./PropertyImage";

function PropertyDetail(props) {
  const { _id, address, year, price, rooms, bathrooms, boards, images } =
    props.data;

  return (
    <Container>
      <Row>
        <h2 style={{ margin: "20px 0px 0px 0px" }}>{address}</h2>
        <h6 style={{ margin: "0px 0px 20px 0px" }}>{year}</h6>
        <div>
          <ControlledCarousel image={images} />
        </div>

        <Button
          variant="primary"
          style={{ width: "40px", margin: "20px 10px 0px 10px" }}
        >
          <i
            class="fa fa-solid fa-heart"
            aria-hidden="true"
            style={{ textAlign: "center" }}
          ></i>
        </Button>

        <h3 style={{ margin: "20px auto" }}>{price}</h3>
        <h4>
          <i
            class="fa fa-bed"
            aria-hidden="true"
            style={{ margin: "5px 10px 0px 0px" }}
          ></i>
          {rooms}
        </h4>
        <h4>
          <i
            class="fa fa-bath"
            aria-hidden="true"
            style={{ margin: "5px 10px 0px 0px" }}
          ></i>
          {bathrooms}
        </h4>
      </Row>
    </Container>
  );
}

export default PropertyDetail;
