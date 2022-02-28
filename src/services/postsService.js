import axios from "axios";

const baseUrl = "https://petro-fastapi-social-media.herokuapp.com/posts/";

let config = {
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
};

export function getAllPosts() {
  return axios.get(baseUrl, config);
}

export function createPost(post) {
  return axios.post(baseUrl, post, config);
}

export function deletePost(postId) {
  return axios.delete(baseUrl + postId, config);
}
