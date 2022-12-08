/* eslint-disable arrow-body-style */
import { useContext } from 'react';
import AuthContext from '../context/AauthProvider';

const useAuth = () => {
  const context = useContext(AuthContext);
  // if (!context) throw new Error('Provider is missing');
  return context;
};

export default useAuth;
