import axios from 'axios';
import queryString from 'query-string';
import { GuardianInterface, GuardianGetQueryInterface } from 'interfaces/guardian';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getGuardians = async (
  query?: GuardianGetQueryInterface,
): Promise<PaginatedInterface<GuardianInterface>> => {
  const response = await axios.get('/api/guardians', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createGuardian = async (guardian: GuardianInterface) => {
  const response = await axios.post('/api/guardians', guardian);
  return response.data;
};

export const updateGuardianById = async (id: string, guardian: GuardianInterface) => {
  const response = await axios.put(`/api/guardians/${id}`, guardian);
  return response.data;
};

export const getGuardianById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/guardians/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteGuardianById = async (id: string) => {
  const response = await axios.delete(`/api/guardians/${id}`);
  return response.data;
};
