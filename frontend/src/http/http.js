import axios from "axios";

const instance = axios.create({
  baseURL: process.env.BASE_URL || "http://localhost:9000/v1",
  timeout: 1000,
});

export const http = instance;

export function updateToken(token) {
  http.defaults.headers["Authorization"] = `Bearer ${token}`;
}
