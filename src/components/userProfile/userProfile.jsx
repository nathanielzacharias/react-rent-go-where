import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {Button, Form} from 'react-bootstrap'
import { toast } from 'react-toastify'
import { getConfirmLocale } from 'antd/lib/modal/locale'

function UserProfile() {
  const navigate = useNavigate()
  const params = useParams()
  const [user, setUser] = useState(null)
  const [formData, setFormData] = useState({
    userId: '',
    gender: '',
  })

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const res = await fetch(`http://localhost:8000/api/v1/profile/update`)
  //     const data = await res.json()
  //     setUser(data)
  //     setFormData(data)
  //   }

  //   fetchApi()
  // }, [params])

  function handleInputChange(e) {
    setFormData({
        // ...formData ->
        // name: 'asdasd',
        // gender: 'asdasd',
        // breed: 'asdasd'
        ...formData,
        [e.target.name]: e.target.value
    })

    // setFormData({name: 'asdasd', gender: 'asdasd', breed: 'asdasd',    gender: 'someSpecies'})
  }

  function handleFormSubmit(e) {
    e.preventDefault()

    // validations ...

    // processing
    fetch(`http://localhost:8000/api/v1/profile/update`, {
        method: 'PATCH',
        body: JSON.stringify(formData),
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then(response => {

            return response.json()
        })
        .then(jsonResponse => {
          // displaying success message
          toast.success("Edit user data successful")
          console.log('edit user successful')
          // redirect to animals listing page
         // navigate('/')
        })
        .catch(err => {
          toast.error(err.message)
        })
  }

  return (
<div className='container'>

      <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">userId</label>
                <input type="text" className="form-control" id="userId" name='userId' value={formData.userId} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="gender" className="form-label">gender</label>
                <input type="text" className="form-control" id="gender" value={formData.gender} name='gender' onChange={handleInputChange} />
            </div>
           
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  );
}

export default UserProfile