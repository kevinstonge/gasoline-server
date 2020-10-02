import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    headers: {
      authorization: localStorage.getItem("token"),
    },
    baseURL: "http://localhost:5000/api",
    //baseURL: process.env.REACT_APP_API_ENDPOINT,
  });
};
