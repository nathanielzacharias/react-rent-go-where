import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import SiteHeader from "./components/partials/SiteHeader";
import PropertyIdPage from "./components/property-id-page/PropertyIdPage";
import Homepage from "./components/homepage-container/Homepage";

import SignUp from "./components/register/Register";
import PropertyBoard from "./components/dashboard/PropertyBoard";
import CreateProperties from "./components/create-property/CreateProperty";
import UserDetails from "./components/userProfile/UserDetails";

import "./antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Guest from "./components/auth/Guest";
import Auth from "./components/auth/Auth";
import Login from "./components/login/Login"
// import UserProfile from "./components/userProfile/UserProfile";


import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./components/homepage-container/homepage.module.scss";
import Sidebar from "./components/partials/Sidebar";

// required parameter to fetch images
const urlEndpoint = "https://ik.imagekit.io/vsoncvhkm/";

// optional parameters (needed for client-side upload)
const publicKey = "public_VW2hCnJrSlQCWKZA9Xk7NnP3oxo=";
const authenticationEndpoint = "http://localhost:8000/auth";

function App() {
  // const [login, setLogin] = useState(0);
  const [numBedrooms, setNumBedrooms] = useState("showAll");

  return (
    <div>
      {/* <SiteHeader props = {setLogin} /> */}
      <SiteHeader />

      <Row className={styles["homepage-container"]}>
        <Col sm={2} className={styles["sidebar-container"]}>
          <Sidebar setNumBedrooms={setNumBedrooms} />
        </Col>

        <Col sm={10}>

          <Routes>
            {/* <Route path ="/user/:userID/delete" element={<Auth component={UserDetails} />} /> */}
            <Route path ="/api/v1/profile" element={<Auth component={UserDetails} />} />

            <Route path="/" element={<Homepage numBedrooms={numBedrooms} />} />

            <Route
              path="/api/v1/auth/login"
              element={<Guest component={Login} />}
            />
            {/* <Route
              path="/api/v1/profile"
              element={<Auth component={UserProfile} />}
            /> */}
            <Route path="/api/v1/auth/register" element={<SignUp />} />
            <Route path="/user/:userID" element={<Homepage />} />
            <Route
              path="/api/v1/app/show_properties/:propID"
              element={<PropertyIdPage />}
            />
            <Route
              path="/api/v1/app/create_properties"
              element={<CreateProperties />}
            />
            <Route
              path="/api/v1/board/show_properties/:userID"
              element={<PropertyBoard />}
            />
          </Routes>
        </Col>
      </Row>

      <ToastContainer />
    </div>
  );
}

export default App;
