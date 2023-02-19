import { IMentor } from './mentor';

export interface IMeeting {
  id: string;
  mentor: IMentor;
  appointment: string;
  created_at: string;
}
