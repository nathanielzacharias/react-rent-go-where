import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ControlledCarousel from "./PropertyImage";
import jwt_decode from "jwt-decode";
import { useParams } from "react-router-dom";

function PropertyDetail(props) {
  const { _id, address, year, price, rooms, bathrooms, boards, images } =
    props.data;

  const userObjId = jwt_decode(localStorage.getItem("user_token"));

  console.log(userObjId.data.objId);

  const params = useParams();
  const propertyID = params.propID;
  console.log(propertyID);
  console.log("this is line 20");

  const [formData, setFormData] = useState({
    userId: ``,
    followedProperties: null,
  });

  console.log(formData);

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const res = await fetch(`http://localhost:8000/api/v1/profile/update`);
  //     const data = await res.json();
  //   };

  //   fetchApi();
  // }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(`http://localhost:8000/api/v1/profile/update`);
      setFormData({
        userId: userObjId.data.objId,
        followedProperties: propertyID,
      });
    };

    fetchApi();
  }, []);

  function addToFavourite(event) {
    fetch(`http://localhost:8000/api/v1/profile/update`, {
      method: "PATCH",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        console.log("edit user successful");
      })
      .catch((err) => {
        console.log("err message");
      });
  }

  return (
    <Container>
      <Row>
        <h2 style={{ margin: "20px 0px 0px 0px" }}>{address}</h2>
        <h6 style={{ margin: "0px 0px 20px 0px" }}>{year}</h6>
        <div>
          <ControlledCarousel image={images} />
        </div>

        <Button
          onClick={addToFavourite}
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
