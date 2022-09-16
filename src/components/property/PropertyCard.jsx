import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function PropertyCard(props) {
  const {
    boards,
    _id,
    address,
    rooms,
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
            <ListGroup.Item>{rooms}</ListGroup.Item>
            <ListGroup.Item>{year}</ListGroup.Item>
            <ListGroup.Item>{price}</ListGroup.Item>
            <ListGroup.Item>{bathrooms}</ListGroup.Item>
            <ListGroup.Item>{sqf_list}</ListGroup.Item>
          </ListGroup>
        </Card>
      </Link>
    </Col>
  );
}

export default PropertyCard;
