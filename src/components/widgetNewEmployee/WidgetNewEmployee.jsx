import "./widgetnewemployee.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ManagerService from "../../service/ManagerService";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
    console.log("useEffect runs");

    axios
      .get("http://localhost:9092/api/v1/manager/find-five-manager")
      .then((response) => {
        setWidgetmanager([...response.data]);
      });
    return () => {
      console.log("useEffect clean-up");
    };
  }, []);
  return (
    <div className="widgetNew">
      <span className="widgetSmTitle">New Join Employee</span>
      <ul className="widgetSmList">
        {widgetmanager.map((employee, index) => (
          <li key={index} className="widgetSmListItem">
            <img
              src={"http://localhost:9091/images/" + employee.image}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmEmployee">
              <span className="widgetUsername">
                {employee.firstName} {employee.surname}
              </span>
              <span className="widgetUserTitle">Software Developer</span>
            </div>
            <Link
              className="links"
              to={"/manager/" + employee.id}
              style={{ textDecoration: "none" }}
            >
              <button className="widgetSmButton">
                <VisibilityIcon className="widgetSmIcon" />
                Display
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetNewEmployee;
