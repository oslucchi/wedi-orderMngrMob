import axios from "axios";
import { SERVER_URL, REST_PATH } from "../environment/env.json";

export const useRestservicePost = () => {
  const post = (path: string, param: any) => {
    console.log("Invoking '" + SERVER_URL + REST_PATH + path + "'");
    return axios({
      method: "POST",
      url: SERVER_URL + REST_PATH + path,
      headers: {
        Language: "IT-it",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(param),
    });
  };

  return { post };
};
