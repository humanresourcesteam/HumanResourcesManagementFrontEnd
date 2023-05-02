import "./login.scss";
import Bro from "../../assets/bro.svg";
import AuthService from "../../service/AuthService";
import { useState } from "react";
import Cookies from "js-cookie";
const Login = () => {
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthService.login(admin).then(
      (response) => {
        console.log(response.data.token);
        Cookies.set("token", response.data.token);
        window.location.replace("/");
      },
      () => {
        alert("giriş başarısız");
      }
    );
  };

  return (
    <div className="login">
      <div className="left">
        <img src={Bro} alt="" />
      </div>
      <div className="right">
        <div className="top">
          <h1 className="title">HumanCo Login</h1>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            className="email-input"
            type="email"
            placeholder="admin@example.com"
            onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
