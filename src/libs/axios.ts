import axios from "axios";
import { AllRouteConstants } from "../router/RouteConstants";
import { Services } from "@services";
import { authSliceActions, store } from "@/redux";

export const baseURL = "http://localhost:8000";

const logoutAction = authSliceActions.logout();

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  // headers: {
  //   Accept: "application/json",
  //   "Content-Type": "application/json",
  // },
});

let retries = 0;

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response && error.response.status === 401 && retries <= 2) {
      try {
        retries += 1;
        await Services.Auth.refreshAccessToken();
        return axiosInstance.request(error.config);
      } catch (error) {
        window.history.pushState(null, "", AllRouteConstants.auth.login);
        window.location.replace(AllRouteConstants.auth.login);
        store.dispatch(logoutAction);
      }
    } else {
      return Promise.reject(error);
    }
  }
);
