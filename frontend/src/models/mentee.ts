import { IMeeting } from './meeting';

export interface IMentee {
  id: string;
  name: string;
  email: string;
  title: string;
  company: string;
  experience: number;
  expertise: string;
  meetings: IMeeting[];
}
