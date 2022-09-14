import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './property-card.module.scss'
import ControlledCarousel from './PropertyImage';

function PropertyDetail(props) {
   
    const {_id,address,year,price,bathrooms,boards,images} = props.data


    return (

        <Container>
        
            <Row>
           

                  <h1>
                    {address}
                  </h1>

                  
                  <div>
                    <ControlledCarousel image={images}/>
                  </div>
               
            </Row>

        </Container>
  
      );
    }

export default PropertyDetail;