import axios from "axios";
const API_URL = "https://umwezi-bill-boards-backend.herokuapp.com/api/v1/users";
const register = (names, email, phone, password) => {
  return axios.post(API_URL + "/register", {
    names,
    email,
    phone,
    password,
  }).then((res)=>{
    console.log(res);
  })
};

const authService = {
  register,
};
export default authService;
