require("dotenv").config();

// import React, {useEffect, useState} from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import jwt_decode from "jwt-decode";
import userDetails from "./UserDetails";
import { PanoramaSharp } from "@mui/icons-material";
// import {useParams} from 'react-router-dom'

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import { getConfirmLocale } from "antd/lib/modal/locale";

function UserProfile() {
  const userObjId = jwt_decode(localStorage.getItem("user_token"));
  console.log(userObjId.data.objId);
  const navigate = useNavigate();
  const params = useParams();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    userId: `${userObjId}`,
    gender: "",
  });

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(`${process.env.BASE_BACKEND_URL}/api/v1/profile/update`);
      const data = await res.json();
      setUser(data);
      setFormData(data);
    };

    fetchApi();
  }, [params]);

  function handleInputChange(e) {
    setFormData({
      userId: userObjId.data.objId,
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    // validations ...

    // processing

    fetch(`${process.env.BASE_BACKEND_URL}/api/v1/profile/update`, {
      method: "PATCH",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        // displaying success message
        toast.success("Edit user data successful");
        console.log("edit user successful");
        // redirect to animals listing page
        // navigate('/')
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }

  return (
    <div className="profile-container">
      <div className="row">
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
              <label htmlFor="gender" className="form-label">
                gender
              </label>
              <input
                type="text"
                className="form-control"
                id="gender"
                value={formData.gender}
                name="gender"
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
