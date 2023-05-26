import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widgets/Widget";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Tables";
import WidgetNewEmployee from "../../components/widgetNewEmployee/WidgetNewEmployee";
import { useContext } from "react";
import Welcome from "../../components/welcome/Welcome";
import withAuth from "../../withAuth";
import Expense from "../../components/expense/Expense";
import Avarage from "../../components/avaragestar/Avarage";
import Salary from "../../components/salary/Salary";
import CircularProgressBar from "../../components/circular/CircularProgressBar";
import Maps from "../../components/maps/Maps";
import BestEmployee from "../../components/bestEmployee/BestEmployee";
import ProjectTime from "../../components/project-time/ProjectTime";
import Best from "../../components/best-list/Best";
import { SidebarContext } from "../../context/SidebarContext";
const Home = () => {
  const { isSidebarVisible } = useContext(SidebarContext);
  return (
    <div className="home">
      {isSidebarVisible && <Sidebar />}
      <div className="homeContainer">
        <Navbar />
        <Welcome />
        <div className="widgets">
          <Widget type="active" />
          <Widget type="retired" />
          <Widget type="total" />
          <Widget type="laik" />
        </div>
        <div className="charts">
          <WidgetNewEmployee />
          <Salary className={isSidebarVisible ? "" : "salary-expanded"} />
          <Maps />
        </div>
        <div className="charts">
          <Best />
          <ProjectTime />
        </div>
      </div>
    </div>
  );
};

export default withAuth(Home);
