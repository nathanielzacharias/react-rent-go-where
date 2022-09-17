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

import "./antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Guest from "./components/auth/Guest";
import Auth from "./components/auth/Auth";
import Login from "./components/login/Login";
import userProfile from "./components/userProfile/userProfile";

function App() {
  // const [login, setLogin] = useState(0);

  return (
    <div>
      {/* <SiteHeader props = {setLogin} /> */}
      <SiteHeader />

      <Routes>
        <Route path="/" element={<Homepage />} />
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
          path="/api/v1/app/create_properties"
          element={<CreateProperties />}
        />
        <Route
          path="/api/v1/board/show_properties/:userID"
          element={<PropertyBoard />}
        />
      </Routes>
    </div>
  );
}

export default App;
