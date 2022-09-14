import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "./property-card.module.scss";
import PropertyDetail from "./PropertyDetail";

function IndividualPropertyCard(props) {
  const params = useParams();
  const [propertyData, setPropertyData] = useState(null);
  const [propertyAddress, setPropertyAddress] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        "http://localhost:8000/api/v1/app/show_properties/"
      );
      const data = await res.json();

      const ID = params.propID;
      const property = data.filter((data) => data._id === ID)[0];

      setPropertyData(property);
    };

    fetchApi();
  }, []);

  console.log(propertyData);

  return propertyData ? <PropertyDetail data={propertyData} /> : "";
}

export default IndividualPropertyCard;
