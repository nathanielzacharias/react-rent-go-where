import React, { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";

function UserDetail(props) {
    const userObjId = jwt_decode(localStorage.getItem('user_token')).data.objId
    console.log ('userObjId :', userObjId)
    const [userData, setUserData] = useState()
        
    useEffect(() => { 
        const fetchUserData = async () => {
            const res = await fetch(`http://localhost:8000/api/v1/profile/${userObjId}`)
            const data = await res.json()
            console.log('data :', data)
            setUserData (data)
        }
        fetchUserData ()
        },[])

    console.log('userdata :', userData)

    return (

        <h1>UserDetails is here</h1>

        )
}

export default UserDetail

// import React, { useEffect, useState} from 'react'
// import Card from '../animal-card/AnimalCard'
// import styles from './animals.module.scss'

// function Animals(props) {
//   const [animals, setAnimals] = useState([])

//   useEffect(() => {
//     const fetchApi = async () => {
//       const res = await fetch('http://localhost:8000/api/v1/animals')
//       const data = await res.json()

//       setAnimals(data)
//     }

//     fetchApi()
//   }, [])

//   const animalCards = animals.map((animal) => (<Card key={animal._id} data={animal} showViewButton={true} />))

//   return (
//     <div className={styles['animals-container']}>
//       <h1>Animals</h1>
//       <div className='d-flex flex-row justify-content-center'>
//         { animalCards }
//       </div>
//     </div>
//   )
// }

// export default Animals
