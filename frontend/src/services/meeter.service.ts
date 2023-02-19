import axios, { AxiosResponse } from 'axios';
import { IMentor } from '../models/mentor';
import { IMentee } from '../models/mentee';

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
