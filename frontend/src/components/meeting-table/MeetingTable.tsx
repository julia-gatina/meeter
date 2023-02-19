import React, { useState } from "react";
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
              <button className="btn btn-danger">Cancel</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
