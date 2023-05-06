import "./singlecompany.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ManagerService from "../../service/ManagerService";
import withAuth from "../../withAuth";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
const SingleCompany = () => {
  let params = useParams();

  const [manager, setManager] = useState({});

  useEffect(() => {
    ManagerService.getInfoForManagerWithId(params.managerId).then(
      (response) => {
        setManager({ ...response.data });
      }
    );
  }, []);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <h2>{manager.firstName + " " + manager.surname}</h2>
        </div>
        <div className="bottom">
          <div className="bottom-top">
            <img
              src={
                manager.image
                  ? "http://localhost:9092/images/" + manager.image
                  : "https://images.unsplash.com/photo-1683097504876-42a726767b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
              }
              className="image-company"
            />
          </div>
          <div className="bottom-bot">
            <div className="bottom_bot__left-side">
              <input type="text" value={"deneme"} />
            </div>
            <div className="bottom_bot__right-side"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(SingleCompany);
