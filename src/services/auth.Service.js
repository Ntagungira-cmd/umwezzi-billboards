import axios from "axios";

const API_URL = "https://umwezi-bill-boards-backend.herokuapp.com/api/v1/users";
const register = (names, email, phone, password) => {
  return axios.post(API_URL + "/register", {
    names,
    email,
    phone,
    password,
  });
};

const login = (emailOrPhone, password) => {
  return axios
    .post(API_URL + "/login", {
      emailOrPhone,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("userData", JSON.stringify(response.data.user));
      }
      return response.data
    });
};

const authService = {
  register,
  login,
};
export default authService;
