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
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

function PropertyDetail(props) {
   
    const {_id,address,year,price,rooms,bathrooms,boards,images} = props.data


    return (

        <Container>
        
            <Row>

                  <h2 style={{ margin:'20px 0px 0px 0px'}}>
                    {address}
                  </h2>

                  <h6 style={{ margin:'0px 0px 20px 0px'}}>
                    {year}
                  </h6>
                  
                  <div>
                    <ControlledCarousel image={images}/>
                  </div>
                  
                  <h3 style={{ margin:'20px auto'}}>
                    {price}
                  </h3>

                  <h4>
                    <i class="fa fa-bed" aria-hidden="true" style={{margin:'5px 10px 0px 0px'}}></i>
                    {rooms}
                  </h4>

                  <h4>
                    <i class="fa fa-bath" aria-hidden="true" style={{margin:'5px 10px 0px 0px'}}></i>
                    {bathrooms}
                  </h4>

               
               
            </Row>

        </Container>
  
      );
    }

export default PropertyDetail;