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

  
  const [admin,setAdmin] = useState({});

   

  const token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJiaWxnZWFkYW0iLCJpZCI6MSwiZXhwIjoxNjgyODMwNDQ4LCJpYXQiOjE2ODI3OTQ0NDh9.M8Ia5Ma3NsnThQIOD0hecTPwSGHVQIhlugfOigo7lhh-YiKHjRXMZgaDB3NBjnE04QJvIMnAn3yQvhd2-6owXg";
  useEffect(() => {
    AdminService.getAllAdminInfo(token).then((response)=> {
      setAdmin((admin)=> ({
        ...admin,
        ...response.data
        
      })
      

      )
    })
  },[])

  console.log(admin);


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
              <img src={admin.image} className="avatar" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
