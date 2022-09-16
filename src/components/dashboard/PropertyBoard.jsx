import React, { useEffect, useState } from "react";
import PropertyCard from "../property/PropertyCard";
import Container from "react-bootstrap/Container";
import jwt_decode from "jwt-decode";

function PropertyBoard(props) {
  const [propertyBoard, setPropertyBoard] = useState([]);
  const userId = jwt_decode(localStorage.getItem("user_token")).data.objId;
  console.log(userId);

  //   useEffect(() => {
  //     const fetchApi = async () => {
  //       const res = await fetch("http://localhost:8000/api/v1/profile");
  //       const data = await res.json();
  //       console.log(data);
  //       //   setPropertyBoard(followedProperties);
  //     };

  //     fetchApi();
  //   }, []);

  const myHeaders = new Headers();
  myHeaders.append("Y9UUJuV4uQ5fn8Ocs8OeZ7NJsDRF5mRu6wsti1hz", "");
  myHeaders.append("Content-Type", "application/json");

  fetch(`http://localhost:8000/api/v1/board/show_properties`, {
    method: "POST",
    body: JSON.stringify({ userId: userId }),
    headers: myHeaders,
    redirect: "follow",
  })
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      console.log(jsonResponse);
    })
    .catch((err) => {
      console.log(err);
    });

  //   const data = await res.json();

  //   const propertyBoardData = data.filter((data) => data._id === userId);

  //   const followedProperties = propertyBoardData.followedProperties;
  //   console.log(propertyBoard);

  //   const propertyCards = properties.map((property) => (
  //     <PropertyCard key={property._id} data={property} />
  //   ));

  return (
    // <Container
    //   fluid
    //   className="d-flex flex-row flex-wrap"
    //   style={{ margin: "5px 5px 5px 5px", padding: "5px 5px" }}
    // >
    //   {propertyCards}
    // </Container>

    "hello world"
  );
}

export default PropertyBoard;
