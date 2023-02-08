import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar";
import SignUpPage from "../components/signup";
import LogInPage from "../components/login";
import Home from "../components/home";

const Auth = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar></Navbar>}>
        <Route index element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route path="signup" element={<SignUpPage></SignUpPage>} />
        <Route path="login" element={<LogInPage></LogInPage>} />
      </Route>
    </Routes>
  );
};

export default Auth;
