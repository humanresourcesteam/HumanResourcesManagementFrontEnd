import "./widgetnewemployee.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ManagerService from "../../service/ManagerService";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PersonDenem from "../../assets/3d-casual-life-young-man-in-headphones-sitting-with-laptop-and-waving.png";
const WidgetNewEmployee = () => {
  const [widgetmanager, setWidgetmanager] = useState([
    {
      id: "",
      firtName: "",
      surname: "",
      email: "",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://34.173.89.16/manager/find-five-manager")
      .then((response) => {
        setWidgetmanager([...response.data]);
      });
    return () => {};
  }, []);
  return (
    <div className="widgetNew">
      <p className="widgetNew-p">New Join Manager</p>
      {widgetmanager.map((employee, index) => (
        <div className="person-area">
          <img
            src={employee.image}
            alt="employee-image"
            className="employee-icon"
          />
          <div className="info-employee">
            <p className="name-employee">
              {employee.firstName} {employee.surname}
            </p>
            <p className="title-employee">Software Developer</p>
          </div>
          <Link
            className="linksa"
            to={"/manager/" + employee.id}
            style={{ textDecoration: "none" }}
          >
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default WidgetNewEmployee;
