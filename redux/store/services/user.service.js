// data service for accessing data
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://demo.proxima-core-engine.proximaagents.com/api/";

const getPublicContent = () => {
  // user retrieve update api
  return axios.get(API_URL + "user");
};

const getUserDashBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

// const getModeratorDashboard = () => {
//   return axios.get(API_URL + "mod", { headers: authHeader() });
// };

const getAdminBoard = () => {
  return axios.get(API_URL + "admin/", { headers: authHeader() });
};

const userService = {
  getPublicContent,
  getUserDashBoard,
  getModeratorDashboard,
  getAdminBoard,
};

export default userService;
