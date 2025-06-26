import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: import.meta.env.VITE_APP_URL,
    headers: {
      Authorization: token,
    },
  });
};

export default axiosWithAuth;
