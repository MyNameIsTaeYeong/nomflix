import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "d0950960e82f2443146c27fdd5c80802",
    language: "en-US",
  },
});

export default api;
