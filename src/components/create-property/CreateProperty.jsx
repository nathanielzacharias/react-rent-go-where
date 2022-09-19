import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import { IKImage, IKContext, IKUpload } from "imagekitio-react";
import ImageUpload from "./UploadImage";

function CreateProperties() {
  const urlEndpoint = "https://ik.imagekit.io/vsoncvhkm/";

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    address: "",
    year: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    originalPoster: "",
  });
  const [userData, setUserData] = useState(null);

  const userId = jwt_decode(localStorage.getItem("user_token")).data.objId;

  console.log(userId);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(`http://localhost:8000/api/v1/profile/${userId}`);
      const data = await res.json();
      console.log(data);
      setUserData(data);
    };
    fetchApi();
  }, []);

  function handleInputChange(e) {
    setFormData({
      // ...formData ->
      // address: 'asdasd',
      // year: 'asdasd',
      // price: 'asdasd'
      ...formData,
      [e.target.name]: e.target.value,
      originalPoster: userData.email,
    });
  }

  console.log(JSON.stringify(formData));

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8000/api/v1/app/create_properties`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((jsonResponse) => {
        // displaying success message
        toast.success("Create successful");
        console.log("Create property successful");

        // redirect to property listing page
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <Form onSubmit={handleFormSubmit} style={{ margin: "10px 400px" }}>
      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="e.g. Mountbatten Rd · D15"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Year of building</Form.Label>
        <Form.Control
          type="text"
          name="year"
          value={formData.year}
          onChange={handleInputChange}
          placeholder="e.g. 2016 · Freehold"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Rental price</Form.Label>
        <Form.Control
          type="text"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="e.g. $20,000/mo"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Number of bedroom</Form.Label>
        <Form.Control
          type="text"
          name="bedrooms"
          value={formData.bedroom}
          onChange={handleInputChange}
          placeholder="e.g. 5 Beds"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Number of bathroom</Form.Label>
        <Form.Control
          type="text"
          name="bathrooms"
          value={formData.bathroom}
          onChange={handleInputChange}
          placeholder="e.g. 6 Baths"
        />
      </Form.Group>

      {/* <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Image upload</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group> */}

      <ImageUpload />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CreateProperties;
