import axios from "axios";
import { store } from "../redux/store";
import { notification } from "antd";

export const appApi = axios.create({
  baseURL: "http://localhost:3010",
});

appApi.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers["token"] = token;
    //bearer TOKEN
  }
  return config;
});

appApi.interceptors.response.use(
  (response) => {
    if (response?.data?.message) {
      notification.success({ message: response.data.message });
    }
    return Promise.resolve(response);
  },
  (error) => {
    console.log(error.response.data);
    if (error.response?.data?.error) {
      notification.error({ message: error.response.data.error });
    } else {
      notification.error({ message: error.message });
    }
    return Promise.reject(error);
  }
);

//
