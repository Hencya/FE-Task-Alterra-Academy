/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light shadow-sm">
        <div class="container-fluid px-5">
          <a class="navbar-brand" href="#">
            <img
              src="/assets/img/logo-ALTA.png"
              alt="Logo-Alterra"
              className="w-75"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a
                className="nav-link mx-3 active text-center"
                aria-current="page"
                href="#"
              >
                HOME
              </a>
              <a className="nav-link mx-3 text-center" href="#">
                ABOUT
              </a>
              <a className="nav-link mx-3 text-center" href="#">
                EXPERIENCE
              </a>
              <a className="nav-link mx-3 text-center" href="contact_us.html">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
