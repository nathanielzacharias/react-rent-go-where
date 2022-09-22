// require("dotenv").config();

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

function MyPropertyCard(props) {
  const {
    boards,
    _id,
    address,
    bedrooms,
    year,
    price,
    bathrooms,
    originalPoster,
    sqf_list,
    images,
  } = props.data;

  const navigate = useNavigate();

  function deleteProperty(event) {
    console.log(event.target.name);
    const propertyID = event.target.name;

    fetch(`${process.env.REACT_APP_BASE_BACKEND_URL}/api/v1/app/delete_properties/${propertyID}`, {
      method: "DELETE",
      body: JSON.stringify({ propID: propertyID }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((jsonResponse) => {
        // displaying success message
        toast.success("Delete property successful");
        console.log("Delete property successful");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }

  return (
    <Col className="d-flex flex-row flex-wrap" style={{ margin: "10px auto" }}>
      <Card style={{ width: "15rem", height: "25rem", cursor: "pointer" }}>
        <Link to={`/api/v1/app/show_properties/${_id}`}>
          <Card.Img
            style={{ width: "15rem", minHeight: "15rem" }}
            variant="top"
            src={images[0]}
          />
        </Link>

        <Card.Body>
          <Card.Title>{address}</Card.Title>
        </Card.Body>

        <ListGroup className="list-group-flush">
          <Card.Body>
            <Button style={{ margin: "0px 12px" }} variant="link">
              Edit
            </Button>
            <Button
              name={_id}
              style={{ margin: "0px 12px" }}
              variant="link"
              onClick={deleteProperty}
            >
              Delete
            </Button>
          </Card.Body>
        </ListGroup>
      </Card>
    </Col>
  );
}

export default MyPropertyCard;
