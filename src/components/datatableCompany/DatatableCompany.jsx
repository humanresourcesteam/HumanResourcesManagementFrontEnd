import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CompanyService from "../../service/CompanyService";

const Datatable = () => {
  // // AXIOS ILE SILME IŞLEMİ YAPILIRKEN BURASI DÜZENLENECEK
  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const managerColumns = [
    { field: "id", headerName: "ID", width: 250 },
    { field: "name", headerName: "Company Name", width: 300 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "address", headerName: "Address", width: 200 },
    { field: "phone", headerName: "Phone", width: 350 },
  ];

  const [company, setCompany] = useState([
    {
      id: "",
      name: "",
      title: "",
      email: "",
      address: "",
      phone: "",
    },
  ]);

  useEffect(() => {
    CompanyService.getSummaryAllCompany().then((response) => {
      setCompany([...response.data]);
    });
    return () => {
      console.log("useEffect clean-up");
    };
  }, []);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="view">
              <Link
                className="linksecompany"
                to={"/company/" + params.row.id}
                style={{ textDecoration: "none" }}
              >
                <span>View</span>
              </Link>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="dataTableTitle">
        <Link to="/company/new" className="links">
          <span>Add new Company</span>
        </Link>
      </div>
      <DataGrid
        className="datagridcompany"
        rows={company}
        columns={managerColumns.concat(actionColumn)}
        pageSizeOptions={[10]}
      />
    </div>
  );
};

export default Datatable;
