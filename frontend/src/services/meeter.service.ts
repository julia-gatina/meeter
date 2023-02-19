import axios from 'axios';
import { IMentor } from '../models/mentor';

const baseUrl = '/api';

export const fetchAllMentors = () => {
  const url = `${baseUrl}/mentor/all`;
  return axios.get<IMentor[]>(url);
};
