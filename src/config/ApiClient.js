// IMPORTING AXIOS LIBRARY
import axios from "axios";

// CONFIGURING BASE URL FOR API CALLS
const ApiClient = axios.create({
  baseURL: "http://localhost:3000",
});

export default ApiClient;
