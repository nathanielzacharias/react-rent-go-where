import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './property-card.module.scss'

function PropertyCard(props) {
    const { boards, _id, address, rooms, year, price, bathrooms, sqf_list } = props.data
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
      );
    }

export default PropertyCard;