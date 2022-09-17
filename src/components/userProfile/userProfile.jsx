import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import jwt_decode from "jwt-decode";
import userDetails from './UserDetails';
import { PanoramaSharp } from '@mui/icons-material';
// import {useParams} from 'react-router-dom'


function UserProfile() {
  const userObjId = jwt_decode(localStorage.getItem('user_token'))
  console.log(userObjId.data.objId)
  // const navigate = useNavigate()
  // const params = useParams()
  // const [user, setUser] = useState(null)
  const [formData, setFormData] = useState({
    // userId: `${userObjId}`,
    // followedProperties: '',
  })


  function handleInputChange(e) {
    setFormData({
        // ...formData ->
        userId: userObjId.data.objId,
        // followedProperties: e.target.value,
    })
  }

  function handleFormSubmit(e) {
    e.preventDefault()

    // validations ...

    // processing
    fetch(`http://localhost:8000/api/v1/profile/`, {
        method: 'GET',
        body: JSON.stringify(formData),
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then(response => {
            return response.json()
        })
        .then(jsonResponse => {
          console.log(jsonResponse)
          toast.success("Edit user data successful")
        })
        .catch(err => {
          toast.error(err.message)
        })
  }

  return (
    
<div className='profile-container'>
  
  <div className='row'>
    <div className="col-md-5 border-right">
    {/*reserved for displaying photo if we wanna do it */}
    </div>
    <div className="col-md-5 border-right">
      <form onSubmit={handleFormSubmit}>
        {/* <div className="col-mb-3 border-right">
          <label htmlFor="userId" className="form-label">userId</label>
            <input type="text" className="form-control" id="userId" name='userId' value={formData.userId} onChange={handleInputChange} /> */}
        {/* </div> */}
        
        <div className="mb-3">
          <label htmlFor="followedProperties" className="form-label">gender</label>
          <input type="text" className="form-control" id="followedProperties" value={formData.followedProperties} name='followedProperties' onChange={handleInputChange} />
        </div>
        <userDetails />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</div>    
  );
 
}

export default UserProfile
