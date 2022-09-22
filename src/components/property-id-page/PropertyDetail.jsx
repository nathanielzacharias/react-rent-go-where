import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ControlledCarousel from "./PropertyImage";
import jwt_decode from "jwt-decode";
import { useParams } from "react-router-dom";
import ToggleButton from "react-bootstrap/ToggleButton";
import { toast } from "react-toastify";

function PropertyDetail(props) {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Active", value: "1" },
    { name: "Radio", value: "2" },
    { name: "Radio", value: "3" },
  ];

  const {
    _id,
    address,
    year,
    price,
    propSqf,
    bedrooms,
    bathrooms,
    boards,
    images,
  } = props.data;

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

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_BACKEND_URL}/api/v1/profile/${userObjId.data.objId}`
      );
      const data = await res.json();
      const propertyArray = data.followedProperties;
      console.log(propertyArray);
      if (propertyArray.includes(propertyID)) {
        setChecked(true);
      } else {
        setChecked(false);
      }
    };

    fetchApi();
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_BACKEND_URL}/api/v1/profile/update`
      );
      setFormData({
        userId: userObjId.data.objId,
        followedProperties: propertyID,
      });
    };

    fetchApi();
  }, []);

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  function addToFavourite(event) {
    if (!checked) {
      console.log(formData);
      fetch(`${process.env.REACT_APP_BASE_BACKEND_URL}/api/v1/profile/update`, {
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
          console.log("successfully add to dashboard");
          toast.success("Added to dashboard!");
        })
        .catch((err) => {
          console.log("err message");
        });
    }

    if (checked) {
      console.log(formData);
      fetch(
        `${process.env.REACT_APP_BASE_BACKEND_URL}/api/v1/profile/deleteFromDashboard`,
        {
          method: "PATCH",
          body: JSON.stringify(formData),
          headers: {
            "Content-type": "application/json",
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((jsonResponse) => {
          console.log("removed from dasboard");
          toast.success("Removed from dashboard");
        })
        .catch((err) => {
          console.log("err message");
        });
    }
  }

  return (
    <Container>
      <Row>
        <h2 style={{ margin: "20px 0px 0px 0px" }}>{address}</h2>
        <h6 style={{ margin: "0px 0px 20px 0px" }}>{year}</h6>
        <div>
          <ControlledCarousel image={images} />
        </div>

        <ToggleButton
          className="mb-2"
          id="toggle-check"
          type="checkbox"
          style={{ width: "40px", margin: "20px 10px 0px 10px" }}
          variant="outline-primary"
          checked={checked}
          value="1"
          onClick={addToFavourite}
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >
          <i
            class="fa fa-solid fa-heart"
            aria-hidden="true"
            style={{ textAlign: "center" }}
          ></i>
        </ToggleButton>

        <h3 style={{ margin: "20px auto" }}>{price}</h3>
        <h4>{propSqf}</h4>
        <h4>
          <i
            class="fa fa-bed"
            aria-hidden="true"
            style={{ margin: "5px 10px 0px 0px" }}
          ></i>
          {bedrooms}
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
