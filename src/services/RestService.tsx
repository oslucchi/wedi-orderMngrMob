import axios from "axios";
import { SERVER_URL, REST_PATH } from "../environment/env.json";
import { Order } from "../types/orders";

export const useRestService = () => {
  const post = (path: string, param: any) => {
    console.log("Invoking '" + SERVER_URL + REST_PATH + path + "'");
    return axios.post<{ orderList: Order[] }>(
      SERVER_URL + REST_PATH + path,
      param,
      {
        headers: {
          Language: "IT-it",
          "Content-Type": "application/json",
        },
      }
    );
  };

  return { post };
};
