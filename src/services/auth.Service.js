import axios from "axios";
const API_URL = "https://umwezi-bill-boards-backend.herokuapp.com/api/v1/users";
const register = (username, email, phone, password) => {
  return axios.post(API_URL + "/register", {
    username,
    email,
    phone,
    password,
  });
};
const authService = {
  register,
};
export default authService;
