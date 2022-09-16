import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropertyGrid from '../property/PropertyGrid'
import Sidebar from '../partials/Sidebar';
import styles from './homepage.module.scss'

function Homepage(props){
    return(
        <Container fluid className = {styles['homepage-container']}>
        
        <Row  className = {styles['homepage-container']}>
          {/* <Col sm={2} className = {styles['sidebar-container']}>
              <Sidebar setNumBedrooms={props.setNumBedrooms}/>
          </Col> */}

          <Col>
          <div></div>
          </Col>
        
          <Col sm={10}>
              <PropertyGrid numBedrooms={props.numBedrooms}/>
          </Col>
        </Row>

      </Container>
    )
}

export default Homepage