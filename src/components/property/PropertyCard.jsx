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
    originalPoster,
    sqf_list,
    images,
  } = props.data;

  return (
    <Col className="d-flex flex-row flex-wrap" style={{ margin: "10px auto" }}>
      <Link to={`/api/v1/app/show_properties/${_id}`}>
        <Card style={{ width: "25rem", cursor: "pointer" }}>
          <Card.Img
            style={{ width: "400px", height: "300px" }}
            variant="top"
            src={images[0]}
          />

          <Card.Body>
            <Card.Title>{address}</Card.Title>
          </Card.Body>

          <ListGroup className="list-group-flush">
            <ListGroup.Item style={{ fontSize: "15px" }}>{year}</ListGroup.Item>
            <ListGroup.Item style={{ fontSize: "25px", fontWeight: "bold" }}>
              {price}
            </ListGroup.Item>
            <ListGroup.Item style={{ fontSize: "20px" }}>
              {" "}
              <i
                class="fa fa-bed"
                aria-hidden="true"
                style={{ margin: "5px 10px 0px 0px" }}
              ></i>
              {bedrooms}
            </ListGroup.Item>
            <ListGroup.Item style={{ fontSize: "20px" }}>
              {" "}
              <i
                class="fa fa-bath"
                aria-hidden="true"
                style={{ margin: "5px 10px 0px 0px" }}
              ></i>
              {bathrooms}
            </ListGroup.Item>
            <ListGroup.Item style={{ fontSize: "15px" }}>
              Listed by{" "}
              <span style={{ fontWeight: "bold" }}>{originalPoster}</span>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Link>
    </Col>
  );
}

export default PropertyCard;
