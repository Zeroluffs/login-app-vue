import axios from "axios";

const API_URL =
  "https://node-login-backend-production.up.railway.app/api/users/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "login", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL, {
      username,
      email,
      password,
    });
  }
}


export default new AuthService();