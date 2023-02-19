import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import { Navigation } from "../navbar/Navigation";
import { Mentor } from "../mentor/Mentor";
import { fetchAllMentors } from "../../services/meeter.service";
import { IMentor } from "../../models/mentor";

const mentee = {
  id: "d794aa23-aabc-4348-9fcb-21f4215cf988",
  name: "John Doe",
  email: "john.doe@meeter.com",
  title: "Software Developer",
  company: "Facebook",
  experience: 4,
  expertise: "Postgres, Express, React, Node",
};

export function Dashboard() {
  const [mentors, setMentors] = useState<IMentor[]>([]);
  const [loading, setLoading] = useState(false);

  function fetchData() {
    setLoading(true);
    fetchAllMentors()
      .then((success) => {
        setLoading(false);
        setMentors(success.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log("Error fetching mentors.", error);
      });
  }

  useEffect(fetchData, []);

  return (
    <div>
      <Navigation mentee={mentee}></Navigation>

      <div className="container">
        {loading && <h2 className="my-3">Loading data ...</h2>}
        {!loading && (
          <div>
            <h2 className="my-3">Find Mentor</h2>

            {mentors.map((mentor) => (
              <Mentor mentor={mentor} key={mentor.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
