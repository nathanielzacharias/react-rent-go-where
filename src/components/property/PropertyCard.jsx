import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './property-card.module.scss'
import { Link } from 'react-router-dom'

function PropertyCard(props) {
 
    const { boards, _id, address, rooms, year, price, bathrooms, sqf_list, images } = props.data

    console.log(images);
    console.log(rooms);

    return (
      <Col className='d-flex flex-row flex-wrap' style={{ margin:'10px auto'}} >
        <Link to={`/api/v1/app/show_properties/${_id}`}>
        <Card style={{ width: '25rem', cursor:"pointer" }}>
          <Card.Img variant="top" src={images[0]} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{address}</ListGroup.Item>
            <ListGroup.Item>{rooms}</ListGroup.Item>
            <ListGroup.Item>{year}</ListGroup.Item>
            <ListGroup.Item>{price}</ListGroup.Item>
            <ListGroup.Item>{bathrooms}</ListGroup.Item>
            <ListGroup.Item>{sqf_list}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        </Link>
      </Col>
       
      );
    }

export default PropertyCard;