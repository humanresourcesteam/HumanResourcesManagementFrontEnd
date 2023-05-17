import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function withAuth(ComponentToProtect) {
  return function AuthenticatedComponent(props) {
    const navigate = useNavigate();

    useEffect(() => {
      const token = Cookies.get("token");
      const role = Cookies.get("erole");

      if (token) {
        const decodedToken = jwtDecode(token);
        const current_time = Date.now().valueOf() / 1000;

        // Token'ın süresi dolmuşsa çerezi sil
        if (decodedToken.exp < current_time) {
          Cookies.remove("token");
          Cookies.remove("erole");
          navigate("/login");
        } else if (role !== "ADMIN") {
          // Role kontrolü
          Cookies.remove("token");
          Cookies.remove("erole");
          navigate("/login");
        }
      } else {
        Cookies.remove("token");
        Cookies.remove("erole");
        navigate("/login");
      }
    }, [navigate]);

    return <ComponentToProtect {...props} />;
  };
}
