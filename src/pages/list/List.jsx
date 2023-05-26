import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import withAuth from "../../withAuth";
import { SidebarContext } from "../../context/SidebarContext";
import { useContext } from "react";
const List = () => {
  const { isSidebarVisible } = useContext(SidebarContext);
  return (
    <div className="list">
      {isSidebarVisible && <Sidebar />}
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default withAuth(List);
