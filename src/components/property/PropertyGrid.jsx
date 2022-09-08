import React, { useEffect, useState} from 'react'
import PropertyCard from './PropertyCard'
import styles from './property.module.scss'

function PropertyGrid(props){

    const [properties, setProperties] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
          const res = await fetch('http://localhost:8000/api/v1/app/show_properties')
          const data = await res.json()
    
          setProperties(data)
        }
    
        fetchApi()
      }, [])

      const propertyCards = properties.map((property) => (<PropertyCard key={property._id} data={property} />))

    return(
        <div className={styles['properties-container']}>
        <div className='d-flex flex-row justify-content-center'>
          { propertyCards }
        </div>
      </div>
    )

}

export default PropertyGrid