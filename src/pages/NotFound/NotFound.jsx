import React from "react";
import { useHistory } from "react-router-dom";

export default function NotFound() {
  const history = useHistory();
  const goHome = () => {
    history.push({
      pathname: `/`,
    });
  };
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <h1>404</h1>
      <h3>Something Gone Wrong</h3>
      <button onClick={goHome}>Return Home</button>
    </div>
  );
}
