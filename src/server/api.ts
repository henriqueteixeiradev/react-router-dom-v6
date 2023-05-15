import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

export function api() {
  return axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
