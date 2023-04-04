// authentication service
import axios from "axios";

const API_URL = "https://demo.proxima-core-engine.proximaagents.com/api/";

const signup = (username, email, password) => {
  // registration api
  return axios.post(API_URL + "users/", {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return (
    axios
      // login api
      .post(API_URL + "users/login", {
        //* later adding capability to login with username;
        //   username,
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      })
  );
};

const logout = () => {
  // removes JWT from local storage
  localStorage.removeItem("user");
};

const authService = {
  signup,
  login,
  logout,
};

export default authService;
