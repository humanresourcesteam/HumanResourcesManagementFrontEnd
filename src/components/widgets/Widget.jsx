import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import AdminService from "../../service/AdminService";
import ManagerService from "../../service/ManagerService";
import CompanyService from "../../service/CompanyService";
const Widget = ({ type }) => {
  let data;
  const token = Cookies.get("token");

  // total number of admin
  const [adminCount, setAdminCount] = useState(0);
  const [managerCount, setManagerCount] = useState(0);
  const [companyCount, setCompanyCount] = useState(0);
  useEffect(() => {
    AdminService.getAllAdminCount(token).then((response) => {
      setAdminCount(response.data.length);
    });
  }, []);

  useEffect(() => {
    console.log("useEffect runs");
    ManagerService.getAllAdminSummaryInfo().then((response) => {
      setManagerCount(response.data.length);
    });
  }, []);

  useEffect(() => {
    console.log("useEffect runs");
    CompanyService.getSummaryAllCompany().then((response) => {
      setCompanyCount(response.data.length);
    });
  }, []);

  switch (type) {
    case "manager":
      data = {
        title: "MANAGER",
        link: "See all manager",
        count: managerCount,
        icon: (
          <ManageAccountsOutlinedIcon
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}
          />
        ),
      };
      break;
    case "employee":
      data = {
        title: "EMPLOYEE",
        link: "See all employee",
        count: 0,
        icon: (
          <BadgeOutlinedIcon
            className="icon"
            style={{
              backgroundColor: " rgba(0, 128, 0, 0.20)",
              color: "green",
            }}
          />
        ),
      };
      break;
    case "total":
      data = {
        title: "TOTAL COMPANY",
        link: "See all total company",
        count: companyCount,
        icon: (
          <AccessibilityNewOutlinedIcon
            className="icon"
            style={{ color: "#0b2447" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.count}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          20%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
