import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel(prop) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  console.log(prop.image)
  return (
   
    <Carousel activeIndex={index} onSelect={handleSelect} style={{ width:'850px'}}>
            {
                prop.image.map((img,index) => (
                    <Carousel.Item key={index} >
                    <img
                    className="d-block w-100"
                    src={img} 
                    />
                    </Carousel.Item>
                ) )
            }
    </Carousel>
   
    )
}

export default ControlledCarousel;