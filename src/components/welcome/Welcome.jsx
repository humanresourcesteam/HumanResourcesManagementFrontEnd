import "./welcome.scss";
import Person from "../../assets/business-3d-happy-robot-assistant-waving-hello.png";
import WorkerService from "../../service/WorkerService";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import AdminService from "../../service/AdminService";
const Welcome = () => {
  const token = Cookies.get("token");
  const [worker, setWorker] = useState({});
  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchWorkerInfo = async () => {
      try {
        const response = await AdminService.getAllAdminInfo(token, {
          cancelToken: source.token,
        });
        setWorker(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
        } else {
        }
      }
    };

    fetchWorkerInfo();

    return () => {
      source.cancel();
    };
  }, [token]);

  return (
    <div className="welcome">
      <div className="welcome-info">
        <div className="welcome-left-side">
          <h2>
            Hey <span>{worker.firstName}</span> Welcome to the Dashboard
          </h2>
          <p className="welcome-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            reprehenderit asperiores tempore quo assumenda, deleniti rem dolore.
            Iusto numquam ad libero rerum doloribus facere odio sapiente nihil,
            commodi at incidunt?
          </p>
        </div>
        <div className="welcome-right-side">
          <img src={Person} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
