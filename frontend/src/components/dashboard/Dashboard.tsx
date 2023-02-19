import React from "react";
import "./Dashboard.scss";
import { Navigation } from "../navbar/Navigation";
import { Mentor } from "../mentor/Mentor";

const mentors = [
  {
    id: "f9613152-50db-4b3c-b9b2-e261efb486f3",
    name: "Jona Moore",
    email: "jona.moore@meeter.com",
    avatar: "https://i.pravatar.cc/300?img=5",
    title: "Chief Technology Officer",
    company: "MetaLab",
    experience: 20,
    expertise:
      "Strategic Development, Building Influence and Business Innovation",
  },
  {
    id: "ccb9f966-a7fd-4aff-b66b-ce99d98dce49",
    name: "Stephanie Redivo",
    email: "stephanie.redivo@meeter.com",
    avatar: "https://i.pravatar.cc/300?img=32",
    title: "Diversity, Equity and Inclusion Lead",
    company: "Translink",
    experience: 15,
    expertise:
      "Inclusive Leadership, Public Speaking, Change Management and Data Analysis",
  },
  {
    id: "c8371c1f-6113-4df6-9e20-f0a556223122",
    name: "Sonia Singh",
    email: "sonia.singh@meeter.com",
    avatar: "https://i.pravatar.cc/300?img=34",
    title: "Senior Account Executive",
    company: "Amazon Web Services",
    experience: 12,
    expertise:
      "Tech Advancement, Skills Development, Stepping into Leadership and Business Communications",
  },
];
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
  return (
    <div>
      <Navigation mentee={mentee}></Navigation>
      <div className="container">
        <h2>Select Mentor</h2>
        <Mentor mentor={mentors[0]}></Mentor>
        <Mentor mentor={mentors[1]}></Mentor>
      </div>
    </div>
  );
}
