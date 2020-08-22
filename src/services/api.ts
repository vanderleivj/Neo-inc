import axios from 'axios';


const api = axios.create({
  baseURL: 'https://www.myfxbook.com/api/',

});

export default api;
