// require("dotenv").config();

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropertyCard from "../property/PropertyCard";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import jwt_decode from "jwt-decode";
import CloseButton from "react-bootstrap/CloseButton";

function PropertyBoard(props) {
  const [propertyBoard, setPropertyBoard] = useState([]);
  const [propertyData, setPropertyData] = useState(null);
  const [propertyDataCard, setPropertyDataCard] = useState(null);
  const params = useParams();
  const userId = jwt_decode(localStorage.getItem("user_token")).data.objId;
  console.log(userId);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        `${process.env.BASE_BACKEND_URL}/api/v1/board/show_properties/${userId}`
      );
      const data = await res.json();
      setPropertyBoard(data.followedProperties);
      console.log(res);
    };
    fetchApi();
  }, []);

  console.log(propertyBoard);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        `${process.env.BASE_BACKEND_URL}/api/v1/app/filter_properties`,
        {
          method: "POST",
          body: JSON.stringify({ propertyID: propertyBoard }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data);
      console.log("filtering");
      setPropertyData(data);

      const propertyCards = data.map((property) => (
        <PropertyCard key={property._id} data={property} />
      ));

      setPropertyDataCard(propertyCards);
    };

    fetchApi();
  }, [propertyBoard]);

  return (
    <Container fluid style={{ margin: "5px 5px 5px 5px", padding: "5px 5px" }}>
      <Row style={{ alignContent: "center" }}>
        {" "}
        <h3 style={{ fontSize: "30px" }}>My dashboard</h3>
      </Row>

      <Row className="d-flex flex-row flex-wrap" style={{ display: "block" }}>
        {propertyDataCard ? propertyDataCard : ""}
      </Row>
    </Container>
  );
}

export default PropertyBoard;
