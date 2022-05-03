import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID UWPoN74BPo4I6QfcTYjQ4w61bJMBDeC3FLwJlcvwTi4",
  },
});
