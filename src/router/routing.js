import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import NotFound from "../pages/notFound";
import MHSignUp from "../pages/signUp";

export default function BasicExample() {
  return (
    <Router>
      <div>
          <Routes>
          {/* <Route path="/" element={<SignUp />} /> */}
          <Route path="/*" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<MHSignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}


