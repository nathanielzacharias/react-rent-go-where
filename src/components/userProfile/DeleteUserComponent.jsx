// require("dotenv").config();

import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function DeleteUserComponent(props) {

    const id = props.userObjId
    // console.log("props is :", id)
    // console.log(`/api/v1/profile/${id}`)

    let navigate = useNavigate()

    const removeUser = async (id) => {
        try {
          const res = await axios.delete(`${process.env.REACT_APP_BASE_BACKEND_URL}/api/v1/profile/${id}`)
          console.log('Item successfully deleted. response is: ', res)
        
          localStorage.removeItem('user_token')
          console.log("localStorage user_token is: ", localStorage.getItem('user_token'))

          navigate('/')
          
          
        } catch (error) {
          alert(error)
        }
      }

    return (
      <div className="ms-2 me-auto">
        <div>
          <small className="remove" onClick={(e) => {
                e.preventDefault()
                removeUser(id)
                console.log("onClick delete small is successful")
                }}>
            Delete
          </small>
        </div>
      </div>
    )
}

export default DeleteUserComponent

