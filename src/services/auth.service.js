import axios from "axios";
import { decodeToken } from "../utils/decode";

const API_URL =
  "https://node-login-backend-production.up.railway.app/api/users/";

class AuthService {
  async login(user) {
    const response = await axios.post(API_URL + "login", {
      email: user.email,
      password: user.password,
    });
    let newUser;
    if (response.data.token) {
      newUser = decodeToken(response.data.token);
      localStorage.setItem("user", JSON.stringify(newUser));
    }
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
