import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dbd4919a5d4345c0a4e2dbc3e72bb7a2",
  },
});
