import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/login.jsx";

const App = () => {
  return (
    <Routes>
    <Route path="/login" element={<LoginForm/>} />
  </Routes>
  );
};

export default App;