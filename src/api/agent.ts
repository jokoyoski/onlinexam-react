import axios, { AxiosResponse } from "axios";
import { RegisterUser } from "../model/RegisterUser";
import { toast } from "react-toastify";
import { LoginUser } from "../model/LoginUser";

//axios.defaults.baseURL = "http://localhost:5000/api/";
axios.defaults.baseURL = "http://bomanaziba-001-site1.dtempurl.com/api/";
axios.interceptors.response.use(undefined, (error) => {

  

  
});
axios.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("jwt");
    if (token)
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const responseBody = (response: AxiosResponse) => response.data;
const sleep = (ms: number) => (response: AxiosResponse) =>
  new Promise<AxiosResponse>((resolve) =>
    setTimeout(() => resolve(response), ms)
  );

const requests = {
  get: (url: string) => axios.get(url).then(sleep(1000)).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body,{
    headers: {
      Authorization: 'Bearer ' + window.localStorage.getItem("jwt")
    }}).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
};
const Activities = {

  register: (userInfo: RegisterUser) =>
    requests.post("/account/register", userInfo),
  login: (userInfo: LoginUser) => requests.post("/account/login", userInfo),
  getCategory: () => requests.get("question"),

  //
};

export default {
  Activities,
};
