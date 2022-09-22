import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import jwt_decode from "jwt-decode";
import EditUserDataCard from "./EditUserDataCard";

function UserDetail() {
  const userObjId = jwt_decode(localStorage.getItem("user_token")).data.objId;

  // console.log("userObjID is: ",userObjId)

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_BACKEND_URL}/api/v1/profile/${userObjId}`
      );
      const data = await res.json();

      // console.log('data :', data)

      setUserData(data);
    };
    fetchUserData();
  }, [userObjId]);

  // console.log('userdata :', userData)

  // const EditUserDataCard = userData.map((durian) => (<EditUserDataCard key={durian._id} data={durian} />))

  return (
    <Container
      fluid
      className="d-flex flex-row flex-wrap"
      style={{ margin: "5px 5px 5px 5px", padding: "5px 5px" }}
    >
      {<EditUserDataCard data={userData} />}
    </Container>
  );
}

export default UserDetail;
