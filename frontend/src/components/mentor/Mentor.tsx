import React, { useState } from "react";
import "./Mentor.scss";
import { IMentor } from "../../models/mentor";
import DatePicker from "react-datepicker";
import { getDay, setHours, setMinutes } from "date-fns";
import { createMeeting } from "../../services/meeter.service";

interface MentorProps {
  mentor: IMentor;
  menteeId: string;
  onMeetingCreate: () => void;
}

export function Mentor(props: MentorProps) {
  const mentor = props.mentor;
  const menteeId = props.menteeId;

  const initialTime = new Date();
  initialTime.setMinutes(0);
  const [meetingDate, setMeetingDate] = useState(initialTime);

  const filterPassedTime = (time: any) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  const isWeekday = (date: any) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };

  const onDatetimePicked = (datetime: any) => {
    setMeetingDate(datetime);
  };

  const onCreateMeeting = () => {
    createMeeting(mentor.id, menteeId, meetingDate)
      .then((meeting) => {
        console.log("New meeting successfully created", meeting);
        props.onMeetingCreate();
      })
      .catch((e) => console.error("Error creating meeting", e));
  };

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
        data-bs-target={"#bookMeetingModal" + mentor.id}
      >
        Book a meeting with {mentor.name}
      </button>

      <div
        className="modal fade"
        id={"bookMeetingModal" + mentor.id}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Book a meeting with {mentor.name}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body mx-2">
              {/* Content goes here */}
              <h5>Select date & time</h5>
              <DatePicker
                selected={meetingDate}
                className="form-control"
                onChange={onDatetimePicked}
                filterDate={isWeekday}
                minTime={setHours(setMinutes(new Date(), 0), 9)}
                maxTime={setHours(setMinutes(new Date(), 0), 18)}
                showTimeSelect
                startDate={null}
                showTimeInput
                filterTime={filterPassedTime}
                dateFormat="MMMM d, yyyy h:mm aa"
              />
              <h5 className="mt-4">Take Your Career To The Next Level</h5>
              <p className="mt-3">
                By applying to participate, you can instantly start taking
                charge of your career path, increasing your leadership impact,
                and building a community on a global platform designed to
                connect, empower and advance women.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={onCreateMeeting}
              >
                Book a Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
