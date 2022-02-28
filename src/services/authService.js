import axios from "axios";
import qs from "qs";

let config = {
  headers: {
    "content-type": "application/x-www-form-urlencoded",
  },
};

const baseUrl = "https://petro-fastapi-social-media.herokuapp.com/login";

export function loginUser(email, password) {
  return axios.post(
    baseUrl,
    qs.stringify({
      username: email,
      password: password,
    }),
    config
  );
}

export function logOut() {
  localStorage.removeItem("token");

  window.location = "/login";
}
