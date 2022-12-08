import axios from 'axios';

const deployUrl = 'https://back-fame-app.up.railway.app/';
const localhost = 'http://localhost:4000/';

const axiosClient = axios.create({
  baseURL: deployUrl,
});

export default axiosClient;
