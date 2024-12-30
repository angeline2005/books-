import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">Bookish Bliss</div>
        <div className="links">
          <Link to="/profile" className="link">
            Profile
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Navbar;
