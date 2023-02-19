import React from "react";
import "./Navigation.scss";
import { IMentee } from "../../models/mentee";
import { Link } from "react-router-dom";

interface MenteeProps {
  mentee: IMentee;
}

export function Navigation(props: MenteeProps) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Meeter Dashboard
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Mentors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                My Profile
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Blog
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Mentee reviews
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider"></hr>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Courses
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" aria-disabled="true">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <div className="nav-item mentee-name" title={props.mentee.email}>
              Logged in as - {props.mentee.name}
            </div>
            <Link to="/" className="btn btn-outline-danger">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
