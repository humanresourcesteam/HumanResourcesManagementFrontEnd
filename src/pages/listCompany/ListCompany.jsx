import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DatatableCompany from "../../components/datatableCompany/DatatableCompany";
import withAuth from "../../withAuth";
import { SidebarContext } from "../../context/SidebarContext";
import { useContext } from "react";
const ListEmployee = () => {
  const { isSidebarVisible } = useContext(SidebarContext);
  return (
    <div className="list">
      {isSidebarVisible && <Sidebar />}
      <div className="listContainer">
        <Navbar />
        <DatatableCompany />
      </div>
    </div>
  );
};

export default withAuth(ListEmployee);
