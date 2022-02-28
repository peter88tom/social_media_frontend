import axios from "axios";

const baseUrl = "https://petro-fastapi-social-media.herokuapp.com/users/";

export function signupUser(email, password) {
  return axios.post(baseUrl, { email, password });
}

export function getUser(userId) {
  return axios.get(baseUrl + userId);
}
