import axiosClient from '../config/axiosClient';

export const updateFirstLogin = async ({ id }) => {
  return await axiosClient.put(`firstLogin/${id}`);
};
