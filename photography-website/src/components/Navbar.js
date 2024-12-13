import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ background: "#eee", padding: "10px" }}>
      <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/audio">Audio</Link>
        </li>
        <li>
          <Link to="/video">Video</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;