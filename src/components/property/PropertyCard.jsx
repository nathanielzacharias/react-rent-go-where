import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function PropertyCard(props) {
  const {
    boards,
    _id,
    address,
    bedrooms,
    year,
    price,
    bathrooms,
    sqf_list,
    images,
  } = props.data;

  return (
    <Col className="d-flex flex-row flex-wrap" style={{ margin: "10px auto" }}>
      <Link to={`/api/v1/app/show_properties/${_id}`}>
        <Card style={{ width: "25rem", cursor: "pointer" }}>
          <Card.Img variant="top" src={images[0]} />

          <Card.Body>
            <Card.Title>{address}</Card.Title>
          </Card.Body>

          <ListGroup className="list-group-flush">
            <ListGroup.Item style={{ fontSize: "15px" }}>{year}</ListGroup.Item>
            <ListGroup.Item style={{ fontSize: "25px", fontWeight: "bold" }}>
              {price}
            </ListGroup.Item>
            <ListGroup.Item style={{ fontSize: "20px" }}>
              {bedrooms}
            </ListGroup.Item>
            <ListGroup.Item style={{ fontSize: "20px" }}>
              {bathrooms}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Link>
    </Col>
  );
}

export default PropertyCard;
