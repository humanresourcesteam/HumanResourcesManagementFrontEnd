import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
import { Link } from "react-router-dom";
import Profile from "../../assets/profile.png";
import AdminService from "../../service/AdminService";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [admin, setAdmin] = useState({});

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJiaWxnZWFkYW0iLCJpZCI6MSwiZXhwIjoxNjgzMDU4MDUyLCJpYXQiOjE2ODMwMjIwNTJ9.VETENiQ8XyFwMbKjHOBuwltry2qao8pT5yFWpfpXa2bGrcT0vSVDyrSs53UZBNKRenvns9AtiyNphRkBOLWj1A";
  useEffect(() => {
    AdminService.getAllAdminInfo(token).then((response) => {
      setAdmin((admin) => ({
        ...admin,
        ...response.data,
      }));
    });
  }, []);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <FullscreenOutlinedIcon className="icon" />
          </div>

          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <div className="item">
              <img
                src={
                  admin.image
                    ? "http://localhost:9091/images/" + admin.image
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                className="avatar"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
