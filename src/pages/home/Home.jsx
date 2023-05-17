import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widgets/Widget";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Tables";
import WidgetNewEmployee from "../../components/widgetNewEmployee/WidgetNewEmployee";
import { useContext } from "react";
import DarkModeContext from "../../context/darkModeContext";
import Sidebar from""


import withAuth from "../../withAuth";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="home">
      <Sidebar />
      {/* HOME CONTAINER */}
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="manager" />
          <Widget type="employee" />
          <Widget type="total" />
        </div>
        <div className="charts">
          <WidgetNewEmployee />
          <Chart />
        </div>
        <div className="listContainer">
          <div className={`listTitle${darkMode ? " dark-mode" : ""}`}>
            All Employee
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default withAuth(Home);
