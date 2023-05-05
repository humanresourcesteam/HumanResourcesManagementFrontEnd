import "./sidebar.scss";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import InsertChartOutlinedSharpIcon from "@mui/icons-material/InsertChartOutlinedSharp";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Link } from "react-router-dom";
import Profile from "../../assets/profile.png";
import AdminService from "../../service/AdminService";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Logout from "../logout/Logout";
import ApartmentIcon from "@mui/icons-material/Apartment";
const Sidebar = () => {
  const [admin, setAdmin] = useState({});

  const token = Cookies.get("token");
  useEffect(() => {
    AdminService.getAllAdminInfo(token).then((response) => {
      setAdmin((admin) => ({
        ...admin,
        ...response.data,
      }));
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">HumanCo</span>
        </Link>
      </div>
      <hr />

      <div className="center">
        <div className="item">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src={
                admin.image
                  ? admin.image
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              className="avatar"
            />
          </Link>
        </div>
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardOutlinedIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LIST</p>
          <Link to="/manager" style={{ textDecoration: "none" }}>
            <li>
              <ManageAccountsOutlinedIcon className="icon" />
              <span>Manager</span>
            </li>
          </Link>
          <Link to="/employee" style={{ textDecoration: "none" }}>
            <li>
              <BadgeOutlinedIcon className="icon" />
              <span>Employee</span>
            </li>
          </Link>
          <Link to="/company" style={{ textDecoration: "none" }}>
            <li>
              <ApartmentIcon className="icon" />
              <span>Company</span>
            </li>
          </Link>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartOutlinedSharpIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>

          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>

          <p className="title">USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <li>
            <ExitToAppIcon className="icon" />
            <Logout />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
