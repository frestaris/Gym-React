import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Memberships from "./components/Memberships";
import FreeTrial from "./components/FreeTrial";
import Timetable from "./components/Timetable";
import AboutUs from "./components/AboutUs";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memberships" element={<Memberships />} />
        <Route path="/free-trial" element={<FreeTrial />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
