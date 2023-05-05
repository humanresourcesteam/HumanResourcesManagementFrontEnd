import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DatatableCompany from "../../components/datatableCompany/DatatableCompany";
import withAuth from "../../withAuth";
const ListEmployee = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DatatableCompany />
      </div>
    </div>
  );
};

export default withAuth(ListEmployee);
