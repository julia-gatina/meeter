import React from "react";
import "./MeetingTable.scss";
import { IMeeting } from "../../models/meeting";
import Moment from "react-moment";

interface MeetingTableProps {
  meetings: IMeeting[];
}

export function MeetingTable(props: MeetingTableProps) {
  const meetings = props.meetings || [];

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Mentor</th>
          <th scope="col">Appointment Time</th>
          <th scope="col">Created</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {meetings.map((meeting, index) => (
          <tr key={meeting.id}>
            <th scope="row">{index + 1}</th>
            <td>{meeting.mentor?.name}</td>
            <td>
              <Moment format="MMM Do, YYYY : h:mma">
                {meeting.appointment}
              </Moment>
            </td>
            <td>
              <Moment fromNow>{meeting.created_at}</Moment>
            </td>
            <td>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#cancelMeetingModal"
              >
                Cancel
              </button>

              <div
                className="modal fade"
                id="cancelMeetingModal"
                aria-labelledby="cancelMeetingModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="bookMeetingModalLabel">
                        Cancel Meeting
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body mx-2">
                      <h6 className="mt-2">
                        Confirm canceling your meeting with{" "}
                        {meeting.mentor?.name}
                      </h6>
                      <p className="mt-3">
                        Time:{" "}
                        <Moment format="MMM Do, YYYY : h:mma">
                          {meeting.appointment}
                        </Moment>
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
                      <button type="button" className="btn btn-danger">
                        Cancel Meeting
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
