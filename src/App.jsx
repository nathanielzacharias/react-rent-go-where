import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import SiteHeader from "./components/partials/SiteHeader";
import PropertyIdPage from "./components/property-id-page/PropertyIdPage";
import Homepage from "./components/homepage-container/Homepage";
import SignUp from "./components/register/Register";
import PropertyBoard from "./components/dashboard/PropertyBoard";

import "./antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Guest from "./components/auth/Guest";
import Auth from "./components/auth/Auth";
import Login from "./components/login/Login";
import userProfile from "./components/userProfile/userProfile";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from './components/homepage-container/homepage.module.scss'
import Sidebar from "./components/partials/Sidebar";




function App() {
  const [numBedrooms, setNumBedrooms] = useState('showAll');

  return (
    <div>
      <SiteHeader />


      <Row className={styles["homepage-container"]}>

      <Col sm={2} className = {styles['sidebar-container']}>
        <Sidebar setNumBedrooms={setNumBedrooms}/>
      </Col>

      <Col sm={10}>
        <Routes>
          <Route path="/" element={<Homepage numBedrooms={numBedrooms} />} />
        <Route
          path="/api/v1/auth/login"
          element={<Guest component={Login} />}
        />
        <Route
          path="/api/v1/profile"
          element={<Auth component={userProfile} />}
        />
        <Route path="/api/v1/auth/register" element={<SignUp />} />
        <Route path="/user/:userID" element={<Homepage />} />
        <Route
          path="/api/v1/app/show_properties/:propID"
          element={<PropertyIdPage />}
        />
        <Route
          path="/api/v1/board/show_properties"
          element={<PropertyBoard />}
        />

        </Routes>
      </Col>

      </Row>



    </div>
  );
}

export default App;
