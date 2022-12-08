import axiosClient from '../config/axiosClient';

export const getUserByEmail = async (email) => {
  return await axiosClient.get('user/', { email });
};

export const getUserById = async (id) => {
  return await axiosClient.get('user/' + id);
};

export const updateUser = async (newUser) => {
  return await axiosClient.put('update/', newUser);
};

export const deleteUserById = async (id) => {
  return await axiosClient.delete('user/' + id);
};
