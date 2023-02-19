import React from "react";
import "./MeetingTable.scss";
import { IMeeting } from "../../models/meeting";
import Moment from "react-moment";
import { deleteMeeting } from "../../services/meeter.service";

interface MeetingTableProps {
  meetings: IMeeting[];
  onDelete: () => void;
}

export function MeetingTable(props: MeetingTableProps) {
  const meetings = props.meetings || [];

  const onCancelMeeting = (id: string): void => {
    deleteMeeting(id)
      .then((response) => {
        if (response.status === 204) {
          console.log("Meeting successfully deleted");
          props.onDelete();
        } else {
          console.error("Error deleting meeting. Status: ", response.status);
        }
      })
      .catch((e) => console.error("Error deleting meeting", e));
  };

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
      {!meetings?.length && (
        <tbody>
          <tr>
            <td colSpan={5} className="text-center">
              There are no Meetings booked yet
            </td>
          </tr>
        </tbody>
      )}
      {!!meetings?.length && (
        <tbody>
          {meetings.map((meeting, index) => (
            <tr key={meeting.id}>
              <th scope="row">{index + 1}</th>
              <td>{meeting.mentor?.name}</td>
              <td>
                <Moment format="MMM Do, YYYY : h:mma" subtract={{ hours: 8 }}>
                  {meeting.appointment}
                </Moment>
              </td>
              <td>
                <Moment fromNow subtract={{ hours: 8 }}>
                  {meeting.created_at}
                </Moment>
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
                          <Moment
                            format="MMM Do, YYYY : h:mma"
                            subtract={{ hours: 8 }}
                          >
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
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-bs-dismiss="modal"
                          onClick={() => onCancelMeeting(meeting.id)}
                        >
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
      )}
    </table>
  );
}
