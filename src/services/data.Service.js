export default function authHeader() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (userData && userData.token) {
    console.log({ "x-access-token": userData.token });
    return { "X-access-token": userData.token };
  } else {
    return {};
  }
}
