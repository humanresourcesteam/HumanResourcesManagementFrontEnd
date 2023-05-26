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
import Table from "../../components/table/Tables";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CompanyService from "../../service/CompanyService";
import MenuIcon from "@mui/icons-material/Menu";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SingleCompany = () => {
  let params = useParams();
  const position = [51.505, -0.09];
  const [company, setCompany] = useState({});
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const [contractsDays, setContractsDays] = useState(0);
  const [remainingDays, setRemainingDays] = useState(0);

  const [manager, setManager] = useState({});
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });

  useEffect(() => {
    if (params.companyId) {
      CompanyService.getInfoForCompanyId(params.companyId)
        .then((response) => {
          setCompany({ ...response.data });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [params.companyId]);

  useEffect(() => {
    if (params.companyId) {
      ManagerService.getManagerInfoForCompany(params.companyId)
        .then((response) => {
          setManager({ ...response.data });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [params.companyId]);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <img src={company.image} alt="" />
          <h2>{company.name}</h2>
        </div>
        <div className="bottom">
          <div className="bottom-top"></div>
          <div className="bottom-bot">
            <div className="bottom-bot-top">
              <h2>Company Info</h2>
              <div className="bottom-double">
                <div className="bottom_bot__left-side">
                  <div className="first-side">
                    <div className="input-form">
                      <label htmlFor="">Company Name:</label>
                      <input type="text" value={company.name} disabled />
                    </div>
                    <div className="input-form">
                      <label htmlFor="">Central Registry System:</label>
                      <input
                        type="text"
                        value={company.centralRegistrySystem}
                        disabled
                      />
                    </div>
                    <div className="input-form">
                      <label htmlFor="">Tax Number:</label>
                      <input type="text" value={company.taxNumber} disabled />
                    </div>
                    <div className="input-form">
                      <label htmlFor="">Tax Office:</label>
                      <input type="text" value={company.taxOffice} disabled />
                    </div>
                    <div className="input-form">
                      <label htmlFor="">Phone:</label>
                      <input type="text" value={company.phone} disabled />
                    </div>
                    <div className="input-form">
                      <label htmlFor="">Email:</label>
                      <input type="text" value={company.email} disabled />
                    </div>
                  </div>
                </div>
                <div className="bottom_bot__right-side">
                  <MapContainer
                    center={position}
                    zoom={5}
                    style={{ height: "40vh", width: "100%" }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                      <Popup>
                        {company.name}
                        <br />
                        {company.address}
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
            </div>
            <div className="bottom-bot-mid-mid">
              <div className="manager-info">
                <h2>Manager Info</h2>
                <div className="manager-info-company">
                  <div className="img-manager">
                    <img
                      src={
                        manager.image
                          ? manager.image
                          : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                      }
                      alt=""
                    />
                  </div>
                  <div className="manager-info-companys">
                    <div className="input-form">
                      <label htmlFor="">Manager Name</label>
                      <input type="text" value={manager.firstName} disabled />
                    </div>
                    <div className="input-form">
                      <label htmlFor="">Manager Email</label>
                      <input type="text" value={manager.email} disabled />
                    </div>
                    <div className="input-form">
                      <label htmlFor="">Manager Phone</label>
                      <input type="text" value={manager.phone} disabled />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-bot-mid">
              <h2 className="charth3">Charts Info</h2>
              <div className="chart-areas">
                <div className="circluebar">
                  <h3>Remaining Contract Term</h3>
                  <CircularProgressbar
                    strokeWidth={1}
                    value={
                      ((company.allContractDay -
                        (company.allContractDay - company.remainingDays)) /
                        contractsDays) *
                      100
                    }
                    text={`${
                      company.allContractDay -
                      (company.allContractDay - company.remainingDays)
                    } days`}
                    styles={buildStyles({
                      rotation: 0.25,
                      strokeLinecap: "butt",
                      textSize: "16px",
                      pathTransitionDuration: 0.5,
                      pathColor: `rgba(62, 152, 199, ${
                        (company.allContractDay -
                          (company.allContractDay - company.remainingDays)) /
                        contractsDays
                      })`,
                      textColor: "#f88",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
                <div className="chartsa">
                  <h3>Total Employee</h3>
                  <AreaChart
                    width={930}
                    height={350}
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="#8884d8"
                      fill="#19376d"
                    />
                  </AreaChart>
                </div>
              </div>
            </div>
            {/* <div className="bottom-bot-bottom">
              <div className="employeelist">
                <h2>Employee List</h2>
                <Table />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(SingleCompany);
