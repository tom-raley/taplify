import axios from 'axios';

export default {
  getData: async () => {
    let res = await axios.get(`/api/getData`);
    return res.data || [];
  }
}