import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import { Navigation } from "../navbar/Navigation";
import { Mentor } from "../mentor/Mentor";
import { fetchAllMentors, fetchMentee } from "../../services/meeter.service";
import { IMentor } from "../../models/mentor";
import { MeetingTable } from "../meeting-table/MeetingTable";
import { IMentee } from "../../models/mentee";

/**
 * For DEMO purposes we will not get Mentee ID
 * from the Login operation (as usual) but
 * it will be hardcoded in constant here.
 */
const CURRENT_MENTEE_ID = "080edab4-b7e8-44e1-bda4-fc4376d6dd94";

export function Dashboard() {
  const [mentee, setMentee] = useState<IMentee>({} as IMentee);
  const [mentors, setMentors] = useState<IMentor[]>([]);
  const [loading, setLoading] = useState(false);

  /**
   * Fetch all Mentors.
   *
   * Fetch mentee details.
   *
   */
  const fetchData = (): void => {
    setLoading(true);

    const mentorsPromise = fetchAllMentors();
    const menteePromise = fetchMentee(CURRENT_MENTEE_ID);
    Promise.all([mentorsPromise, menteePromise])
      .then(([mentorsResponse, menteeResponse]) => {
        setLoading(false);
        setMentors(mentorsResponse.data);
        setMentee(menteeResponse.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log("Error fetching mentors.", error);
      });
  };

  const refreshMentee = (): void => {
    setLoading(true);

    fetchMentee(CURRENT_MENTEE_ID)
      .then((menteeResponse) => {
        setLoading(false);
        setMentee(menteeResponse.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log("Error fetching mentee.", error);
      });
  };

  /* Hook: onInit */
  useEffect(fetchData, []);

  return (
    <div>
      <Navigation mentee={mentee}></Navigation>

      <div className="container-fluid mt-3 mx-3">
        {loading && (
          <div className="row">
            <div className="col">
              <h2 className="my-3">Loading data ...</h2>
            </div>
          </div>
        )}
        {!loading && (
          <div className="row">
            <div className="col-12 col-lg-5">
              <h2 className="my-3">Find Mentor</h2>

              {mentors.map((mentor) => (
                <Mentor
                  mentor={mentor}
                  menteeId={mentee.id}
                  key={mentor.id}
                  onMeetingCreate={refreshMentee}
                />
              ))}
            </div>
            <div className="col-12 col-lg-7">
              <h2 className="my-3">Booked Meetings</h2>
              <MeetingTable
                meetings={mentee.meetings}
                onDelete={refreshMentee}
              ></MeetingTable>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
