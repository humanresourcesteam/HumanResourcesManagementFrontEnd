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

  // AXIOS ILE SILME IŞLEMİ YAPILIRKEN BURASI DÜZENLENECEK
  const handleDelete = (id) => {
    setManager(manager.filter((item) => item.id !== id));
  };

  useEffect(() => {
    console.log("useEffect runs");
    ManagerService.getAllAdminSummaryInfo().then((response) => {
      setManager([...response.data]);
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
                className="links"
                to={"/manager/" + params.row.id}
                style={{ textDecoration: "none" }}
              >
                <span>View Profile</span>
              </Link>
            </div>
            {/* <div className="delete">
              <DeleteOutlineOutlinedIcon
                className="icon"
                onClick={() => handleDelete(params.row.id)}
              />
            </div> */}
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="dataTableTitle">
        <Link to="/manager/new" className="link">
          Add new manager
        </Link>
      </div>
      <DataGrid
        style={{ fontWeight: "700" }}
        className="datagrid"
        rows={manager}
        columns={managerColumns.concat(actionColumn)}
        rowHeight={100}
        pageSizeOptions={[5]}
      />
    </div>
  );
};

export default Datatable;
