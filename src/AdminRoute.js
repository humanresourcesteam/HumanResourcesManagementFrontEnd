import { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { UserContext } from "./UserContext"; // './UserContext' dosyanın yolunu temsil eder ve dosyanın konumuna göre değişebilir.

const AdminRoute = ({ element, ...rest }) => {
  const { user } = useContext(UserContext);

  return user && user.role === "ADMIN" ? (
    <Route element={element} {...rest} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default AdminRoute;
