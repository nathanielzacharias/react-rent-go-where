import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropertyGrid from '../property/PropertyGrid'
import Sidebar from '../partials/Sidebar';
import styles from './homepage.module.scss'

function Homepage(){
    return(
        <Container className = {styles['homepage-container']}>
        
        <Row xs={4} className = {styles['homepage-container']}>
          <Col className = {styles['sidebar-container']}>
              <Sidebar/>
          </Col>
        
          <Col  className = {styles['property-container']}>
              <PropertyGrid/>
          </Col>
        </Row>

      </Container>
    )
}

export default Homepage