import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import styles from "./property.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PropertyGrid(props) {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        "http://localhost:8000/api/v1/app/show_properties"
      );
      const data = await res.json();

      setProperties(data);
    };

    fetchApi();
  }, []);

  const propertyCards = properties.map((property) => (
    <PropertyCard key={property._id} data={property} />
  ));

  return (
    <Container
      fluid
      className="d-flex flex-row flex-wrap"
      style={{ margin: "5px 5px 5px 5px", padding: "5px 5px" }}
    >
      {propertyCards}
    </Container>
  );
}

export default PropertyGrid;
