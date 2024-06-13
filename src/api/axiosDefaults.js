import axios from "axios";

axios.defaults.baseURL = "https://sure-moments-8fa30987b0d1.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();