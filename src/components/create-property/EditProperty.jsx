import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyPropertyCard from "./MyPropertyCard";
import ImageUpload from "./UploadImage";

function EditProperty() {
  const urlEndpoint = "https://ik.imagekit.io/vsoncvhkm/";
  const params = useParams();
  const propertyID = params.propID;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    address: "",
    year: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    images: "",
    originalPoster: "",
  });
  const [userData, setUserData] = useState(null);
  const [propertyImages, setPropertyImages] = useState([]);
  const [properties, setProperties] = useState([]);
  const [propertyDataCard, setPropertyDataCard] = useState(null);
  const [imagePath, setImagePath] = useState([]);

  const userToken = jwt_decode(localStorage.getItem("user_token"));
  const userId = userToken.data.objId;
  const userEmail = userToken.data.email;

  console.log(userToken);
  console.log(userEmail);
  console.log(userId);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_BACKEND_URL}/api/v1/app/show_properties/${propertyID}`
      );

      const data = await res.json();
      console.log(data);
      setFormData(data);
      setPropertyImages(data.images);
      setImagePath(data.imagePath);
    };
    fetchApi();
  }, []);
  console.log(formData);
  console.log(imagePath);
  console.log(propertyImages);

  function handleInputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      images: propertyImages,
      imagePath: imagePath,
    });
  }

  console.log(JSON.stringify(formData));

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("event submitted");

    fetch(
      `${process.env.REACT_APP_BASE_BACKEND_URL}/api/v1/app/edit_properties/${propertyID}`,
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
        // displaying success message
        toast.success("Edit property successful");

        // redirect to property listing page
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleFormSubmit} style={{ margin: "10px 10px" }}>
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
              <Form.Label>Property area</Form.Label>
              <Form.Control
                type="text"
                name="propSqf"
                value={formData.propSqf}
                onChange={handleInputChange}
                placeholder="e.g. 5,000 sqft / 464.51 sqm"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Number of bedroom</Form.Label>
              <Form.Control
                type="text"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleInputChange}
                placeholder="e.g. 5 Beds"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Number of bathroom</Form.Label>
              <Form.Control
                type="text"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleInputChange}
                placeholder="e.g. 6 Baths"
              />
            </Form.Group>

            <ImageUpload
              setPropertyImages={setPropertyImages}
              propertyImages={propertyImages}
              imagePath={imagePath}
              setImagePath={setImagePath}
            />

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default EditProperty;
