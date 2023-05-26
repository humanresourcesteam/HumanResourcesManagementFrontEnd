import "./datatable.scss";
import { DataGrid, GridColumnHeaderFilterIconButton } from "@mui/x-data-grid";
import { managerColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ManagerService from "../../service/ManagerService";

const Datatable = () => {
  const [manager, setManager] = useState([
    {
      id: "",
      firtName: "",
      image: "",
      surname: "",
      email: "",
      phone: "",
      address: "",
    },
  ]);

  useEffect(() => {
    ManagerService.getAllAdminSummaryInfo().then((response) => {
      setManager([...response.data]);
    });
    return () => {};
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
                to={"/manager/" + params.row.id}
                style={{ textDecoration: "none" }}
              >
                <span>View Profile</span>
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
        <Link to="/manager/new" className="links">
          <span>Add new manager </span>
        </Link>
      </div>

      <DataGrid
        rows={manager}
        columns={managerColumns.concat(actionColumn)}
        rowHeight={100}
        pageSizeOptions={[5]}
      />
    </div>
  );
};

export default Datatable;
