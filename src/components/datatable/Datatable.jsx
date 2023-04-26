import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { managerColumns, managerRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
const Datatable = () => {
  const [data, setData] = useState(managerRows);

  // AXIOS ILE SILME IŞLEMİ YAPILIRKEN BURASI DÜZENLENECEK
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="view">
              <Link className="link" to={"/manager/" + params.row.id}>
                <EditOutlinedIcon className="icon" />
              </Link>
            </div>
            <div className="delete">
              <DeleteOutlineOutlinedIcon
                className="icon"
                onClick={() => handleDelete(params.row.id)}
              />
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={managerColumns.concat(actionColumn)}
        paginationModel={{ page: 0, pageSize: 10 }}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
