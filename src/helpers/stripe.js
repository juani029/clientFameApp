import axiosClient from '../config/axiosClient';

export const createCheckoutRequest = async (order) => {
  return await axiosClient.post('payment', order);
};
