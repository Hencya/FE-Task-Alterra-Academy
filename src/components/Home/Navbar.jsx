import React from "react";
import styles from "./Navbar.module.css";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const history = useHistory();
  const action = () => {
    history.push({
      pathname: `/about`,
    });
  };
  return (
    <div className={styles.navbar}>
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler text-toogle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-expanded"></span>
            {/* <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-x text-collapsed"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </span> */}
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav text-start ms-2">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a onClick={action} className="nav-link">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
