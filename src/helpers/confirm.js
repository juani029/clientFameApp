import axiosClient from '../config/axiosClient';

export const confirm = async (token) => {
  return await axiosClient.get(`confirm/${token}`);
};
