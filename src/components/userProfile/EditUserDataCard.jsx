import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";

import DeleteUserComponent from "./DeleteUserComponent";

function EditUserDataCard(props) {
  const {
    _id,
    name,
    email,
    budget,
    location,
    ethinicity,
    nationality,
    gender,
    profilePic,
  } = props.data;

  const navigate = useNavigate();
  const [inputGender, setInputGender] = useState();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    userId: `${_id}`,
  });
  console.log("formdata : ", formData);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_BACKEND_URL}/api/v1/profile/`
      );
      const data = await res.json();
      setUser(data);
      setFormData(data);
    };

    fetchApi();
  }, [props.data]);

  // console.log("props.data is", props.data);

  function handleInputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      userId: _id,
    });
  }
  console.log("stringify:", JSON.stringify(formData));

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch(`${process.env.REACT_APP_BASE_BACKEND_URL}/api/v1/profile/update/`, {
      method: "PATCH",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((jsonResponse) => {
        // displaying success message
        toast.success("Edit User successful");
        console.log("Edit User successful");

        // redirect to property listing page
        // navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit} style={{ margin: "10px 400px" }}>
        <label htmlFor="name" className="form-label">
          Current Name: {name}
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={formData.name}
          name="name"
          onChange={handleInputChange}
        />

        <label htmlFor="gender" className="form-label">
          Current Gender: {gender}
        </label>
        <input
          type="text"
          className="form-control"
          id="gender"
          value={formData.gender}
          name="gender"
          onChange={handleInputChange}
        />

        <label htmlFor="ethinicity" className="form-label">
          Current Ethinicity: {ethinicity}
        </label>
        <input
          type="text"
          className="form-control"
          id="ethinicity"
          value={formData.ethinicity}
          name="ethinicity"
          onChange={handleInputChange}
        />

        <Button variant="primary" type="submit">
          Edit
        </Button>

        <DeleteUserComponent userObjId={_id} />
      </Form>
    </div>
  );
}

export default EditUserDataCard;
