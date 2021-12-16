import axios from "axios";
const SERVER_URL = "http://localhost:3001";

const Instance = axios.create({
  baseURL: SERVER_URL,
});

export { Instance, SERVER_URL };