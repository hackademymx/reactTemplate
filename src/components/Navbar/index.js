import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <span>React template</span>
      <div className="navbar__buttons">
        <span onClick={() => navigate("/")}>Home</span>
        <span onClick={() => navigate("/edit")}>Crear</span>
      </div>
    </div>
  );
}
