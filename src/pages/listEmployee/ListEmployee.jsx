import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DatatableEmployee from "../../components/datatableEmployee/DatatableEmployee";
const ListEmployee = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DatatableEmployee />
      </div>
    </div>
  );
};

export default ListEmployee;
