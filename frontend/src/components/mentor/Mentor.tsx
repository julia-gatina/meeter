import React from "react";
import "./Mentor.scss";
import { IMentor } from "../../models/mentor";

interface MentorProps {
  mentor: IMentor;
}

export function Mentor(props: MentorProps) {
  const mentor = props.mentor;

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={mentor.avatar}
            className="img-fluid rounded-start"
            alt="Mentor Image"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="name">
              <h5 className="card-title">{mentor.name}</h5>
              <small className="text-muted">email: {mentor.email}</small>
            </div>
            <p className="card-text">
              <u>Area of Expertise:</u> {mentor.expertise}
            </p>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item">Title: {mentor.title}</li>
              <li className="list-group-item">Company: {mentor.company}</li>
              <li className="list-group-item">
                Experience: {mentor.experience} years
              </li>
            </ul>
            <p className="card-text">
              <button className="btn btn-primary">Book a Meeting</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
