import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import styles from "./property.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PropertyGrid(props) {
  const [properties, setProperties] = useState([]);
  const [filteredPropertyCards, setFilteredPropertyCards] = useState([]);

  const numBedrooms = props.numBedrooms;
  let filteredProperties = [""];
  let mappedFilteredProperties = [""];

  //fetch all properties
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

  //filter based on numBedrooms
  useEffect(() => {
    console.log("numBedrooms is: ", numBedrooms);

    if (numBedrooms === null || numBedrooms === 'showAll') {
      mappedFilteredProperties = properties.map((property) => (
        <PropertyCard key={property._id} data={property} />
      ));
      console.log("mappedFilteredProperties is: ", mappedFilteredProperties);

      setFilteredPropertyCards(mappedFilteredProperties);
    }

    else {
    //filter here by numBedrooms
    filteredProperties = properties.filter(
      (property) => property.rooms.split(" ")[0] === numBedrooms
    );
    // console.log("filteredProperties is: ", filteredProperties)

    mappedFilteredProperties = filteredProperties.map((property) => (
      <PropertyCard key={property._id} data={property} />
    ));
    console.log("mappedFilteredProperties is: ", mappedFilteredProperties);

    setFilteredPropertyCards(mappedFilteredProperties);

    }
  }, [props, properties]);

  return (
    <Container
      fluid
      className="d-flex flex-row flex-wrap"
      style={{ margin: "5px 5px 5px 5px", padding: "5px 5px" }}
    >
      {filteredPropertyCards}
    </Container>
  );
}

export default PropertyGrid;
