import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import SiteHeader from "./components/partials/SiteHeader";
import Sidebar from "./components/partials/Sidebar";
import PropertyGrid from "./components/property/PropertyGrid";
import PropertyCard from "./components/property/PropertyCard";
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

function App() {
  // const [login, setLogin] = useState(0);

  return (
    <div>
      {/* <SiteHeader props = {setLogin} /> */}
      <SiteHeader />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <SignUp/>
        <Route path="/api/v1/auth/login" element={<Guest component={Login} />} />
        <Route path ="/api/v1/profile" element={<Auth component={userProfile} />} />
        <Route path="/api/v1/auth/register" element={<SignUp />} />
        <Route path="/user/:userID" element={<Homepage />} />
      </Routes>

    </div>
  );
}

export default App;
