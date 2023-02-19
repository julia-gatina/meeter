import axios, { AxiosResponse } from 'axios';
import { IMentor } from '../models/mentor';

const baseUrl = '/api';

export const fetchAllMentors = (): Promise<AxiosResponse<IMentor[], any>> => {
  const url = `${baseUrl}/mentor/all`;
  return axios.get<IMentor[]>(url);
};
