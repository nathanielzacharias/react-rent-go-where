import React, { useEffect, useState } from "react";
import {Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";

import DeleteUserComponent from './DeleteUserComponent'

function EditUserDataCard(props) {
  console.log ('props.data is', props.data)
  const { _id, name, email, budget, location, ethinicity, nationality, gender, profilePic} = props.data
 // console.log(email)
  // console.log(gender)
  // const navigate = useNavigate();

  // const [formData, setFormData] = useState();

  // function handleInputChange(e) {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });

  //   const handleFormSubmit = (event) => {
  //     event.preventDefault();
  
  //     fetch(`http://localhost:8000/api/v1/app/profile/${_id}`, {
  //       method: "POST",
  //       body: JSON.stringify(formData),
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     })
  //       .then((jsonResponse) => {
  //         // displaying success message
  //         toast.success("Create successful");
  //         console.log("edit user details successful");
  
  //         // redirect to property listing page
  //         navigate("/");
  //       })
  //       .catch((err) => {
  //         toast.error(err.message);
  //       });
  //   };

  return (
    <div>
      <Form  style={{ margin: "10px 400px" }}>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          name="Email"
          value={email}
          // onChange={handleInputChange}
          placeholder= "Email"
        />
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        <Form.Control
          type="text"
          name="Gender"
          value={gender}
          // onChange={handleInputChange}
          placeholder= "Gender"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>location</Form.Label>
        <Form.Control
          type="text"
          name="location"
          value={location}
          // onChange={handleInputChange}
          placeholder= "location"
        />
      </Form.Group>
      <DeleteUserComponent userObjId={_id}/>
   </Form>
    </div>
  )
}

export default EditUserDataCard