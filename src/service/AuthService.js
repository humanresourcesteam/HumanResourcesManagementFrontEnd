import axios from "axios";

const LOGIN = "http://localhost:9090/auth/login";
class AuthService {
  login(admin) {
    return axios.post(LOGIN, admin);
  }
}

export default new AuthService();
