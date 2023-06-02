import axios from "axios";
import { decodeToken } from "../utils/decode";

const API_URL =
  "https://node-login-backend-production.up.railway.app/api/users/";

class AuthService {
  async login(user) {
    const response = await axios.post(API_URL + "login", {
      username: user.username,
      password: user.password,
    });
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data.token));
    }
    const newUser = decodeToken(response.data.token);
    return newUser;
  }
  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    return axios.post(API_URL, {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}

export default new AuthService();
