import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/login.jsx";
import SignUpForm from "./components/signup.jsx";
import Navbar from "./components/Navbar.jsx";
import Homepage from "./Pages/Homepage.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[100vh]"></div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
