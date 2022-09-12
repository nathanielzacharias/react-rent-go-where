import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropertyGrid from '../property/PropertyGrid'
import Sidebar from '../partials/Sidebar';
import styles from './homepage.module.scss'

function Homepage(){
    return(
        <Container fluid className = {styles['homepage-container']}>
        
        <Row  className = {styles['homepage-container']}>
          <Col sm={3} className = {styles['sidebar-container']}>
              <Sidebar/>
          </Col>
        
          <Col sm={9}>
              <PropertyGrid/>
          </Col>
        </Row>

      </Container>
    )
}

export default Homepage