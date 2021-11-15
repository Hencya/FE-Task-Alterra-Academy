import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="NotFound">
      <div className="position-absolute top-50 start-50 translate-middle">
        <h1>404</h1>
        <h3>Something Gone Wrong</h3>
        <button onClick={() => navigate("/")}>Return Home</button>
      </div>
    </div>
  );
}
