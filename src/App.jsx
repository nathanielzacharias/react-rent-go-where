import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import SiteHeader from "./components/partials/SiteHeader";
import Sidebar from "./components/partials/Sidebar";
import PropertyGrid from "./components/property/PropertyGrid";
import PropertyCard from "./components/property/PropertyCard";
import IndividualPropertyCard from "./components/property/IndividualPropertyCard";
import Homepage from "./components/homepage-container/Homepage";
import SignUp from './components/register/Register';

import { Button } from "antd";
import { Pagination } from "antd";


import "./antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Guest from "./components/auth/Guest";
import Auth from "./components/auth/Auth";
import Login from "./components/login/Login"
import userProfile from "./components/userProfile/userProfile";

import Col from 'react-bootstrap/Col';
import styles from './components/homepage-container/homepage.module.scss'



function App() {
  const [numBedrooms, setNumBedrooms] = useState(null);

  return (
    <div>
      <SiteHeader />

      <Col sm={2} className = {styles['sidebar-container']}>
        <Sidebar setNumBedrooms={setNumBedrooms}/>
      </Col>

      <Routes>
        <Route path="/" element={<Homepage numBedrooms={numBedrooms} />} />
        <Route path="/api/v1/app/show_properties/:propID" element={<IndividualPropertyCard />} />
        <Route path="/api/v1/auth/login" element={<Guest component={Login} />} />

        <Route path ="/api/v1/profile" element={<Auth component={userProfile} />} />
        <Route path="/api/v1/auth/register" element={<SignUp />} />
        <Route path="/user/:userID" element={<Homepage />} />
        <Route path ="/api/v1/profile" element={<Auth component={userProfile} />} />

      </Routes>

    </div>
  );
}

export default App;
