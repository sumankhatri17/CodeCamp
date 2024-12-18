import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/login.jsx";
import SignUpForm from "./components/signup.jsx";
import Navbar from "./components/Navbar.jsx";
import Homepage from "./Pages/Homepage.jsx";
import Footer from "./components/Footer.jsx";
import Evaluation from "./Pages/Evaluation.jsx";
import ApplyForInstructor from "./components/ApplyForInstructor.jsx";
import Landingpage from "./Pages/Landingpage.jsx";


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/evaluate" element={<Evaluation />} />
          <Route
            path="/apply-instructor"
            className="py-[150px]"
            element={<ApplyForInstructor />}
          />
          <Route path="/landing" element={<Landingpage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
