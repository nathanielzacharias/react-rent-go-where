import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropertyCard from "../property/PropertyCard";
import Container from "react-bootstrap/Container";
import jwt_decode from "jwt-decode";

function PropertyBoard(props) {
  const [propertyBoard, setPropertyBoard] = useState([]);
  const [propertyData, setPropertyData] = useState(null);
  const [propertyDataCard, setPropertyDataCard] = useState(null);
  const params = useParams();
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

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        `http://localhost:8000/api/v1/board/show_properties/${userId}`
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
        "http://localhost:8000/api/v1/app/filter_properties",
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
    <Container
      fluid
      className="d-flex flex-row flex-wrap"
      style={{ margin: "5px 5px 5px 5px", padding: "5px 5px" }}
    >
      {propertyDataCard ? propertyDataCard : ""}
    </Container>

    // "hello world"
  );
}

//   return propertyData ? (
//     <Container
//       fluid
//       className="d-flex flex-row flex-wrap"
//       style={{ margin: "5px 5px 5px 5px", padding: "5px 5px" }}
//     >
//       {propertyCards}
//     </Container>
//   ) : (
//     ""
//   );

export default PropertyBoard;
