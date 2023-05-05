import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DatatableEmployee from "../../components/datatableEmployee/DatatableEmployee";
import withAuth from "../../withAuth";
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

export default withAuth(ListEmployee);
