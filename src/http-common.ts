import axios from "axios";

export default axios.create({
  baseURL: "http://lumen.local/api",
  headers: {
    "Content-type": "application/json"
  }
});
