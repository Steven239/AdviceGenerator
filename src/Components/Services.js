import axios from "axios";

const AdviceOfTheDay = () => {
  const config = {
    method: "GET",
    url: "/advice",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-type": "application/json" },
  };
  return axios(config);
};

export { AdviceOfTheDay };
