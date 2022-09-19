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

  console.log(props.data);

  const navigate = useNavigate();
  const [inputGender, setInputGender] = useState();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    userId: `${_id}`,
    gender: inputGender,
  });

  useEffect(() => {
    setFormData(props.data);
  }, [props.data]);

  // setFormData(props.data)
  // console.log("formdata is :", formData)
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

    fetch(`http://localhost:8000/api/v1/profile/update/`, {
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

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <DeleteUserComponent userObjId={_id} />
      </Form>
    </div>
  );
}

export default EditUserDataCard;
