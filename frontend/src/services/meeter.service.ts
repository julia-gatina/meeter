import axios, { AxiosResponse } from 'axios';
import { IMentor } from '../models/mentor';
import { IMentee } from '../models/mentee';
import { IMeeting } from '../models/meeting';

const baseUrl = '/api';

export const fetchAllMentors = (): Promise<AxiosResponse<IMentor[]>> => {
  const url = `${baseUrl}/mentor/all`;
  return axios.get<IMentor[]>(url);
};

export const fetchMentee = (
  menteeId: string
): Promise<AxiosResponse<IMentee>> => {
  const url = `${baseUrl}/mentee/${menteeId}`;
  return axios.get<IMentee>(url);
};

export const createMeeting = (
  mentorId: string,
  menteeId: string,
  appointment: Date
): Promise<AxiosResponse<IMeeting>> => {
  const url = `${baseUrl}/meeting`;
  const payload = {
    mentorId: mentorId,
    menteeId: menteeId,
    appointment: appointment,
  };
  return axios.post<IMeeting>(url, payload);
};

export const deleteMeeting = (
  meetingId: string
): Promise<AxiosResponse<void>> => {
  const url = `${baseUrl}/meeting/${meetingId}`;
  return axios.delete<void>(url);
};
