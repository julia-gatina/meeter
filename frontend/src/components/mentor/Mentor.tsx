import React from "react";
import "./Mentor.scss";
import { IMentor } from "../../models/mentor";

interface MentorProps {
  mentor: IMentor;
}

export function Mentor(props: MentorProps) {
  const mentor = props.mentor;

  return (
    <div className="card mb-4">
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
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#bookMeetingModal"
      >
        Book a meeting with {mentor.name}
      </button>

      <div
        className="modal fade"
        id="bookMeetingModal"
        aria-labelledby="bookMeetingModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="bookMeetingModalLabel">
                Book a meeting with {mentor.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Content goes here */}
              Select date
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-warning">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
