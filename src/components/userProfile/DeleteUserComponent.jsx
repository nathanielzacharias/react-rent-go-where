import React from 'react'
import axios from 'axios'

function DeleteUserComponent(props) {

    const id = props.userObjId
    console.log("props is :", id)
    console.log(`/api/v1/profile/${id}`)

    const removeUser = async (id) => {
        try {
          const res = await axios.delete(`http://localhost:8000/api/v1/profile/${id}`)
          console.log('Item successfully deleted. response is: ', res)
          
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

