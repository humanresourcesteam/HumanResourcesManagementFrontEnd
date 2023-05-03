import "./datatable.scss";
import { DataGrid, GridColumnHeaderFilterIconButton } from "@mui/x-data-grid";
import { managerColumns, managerRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Grid3x3Outlined, Grid3x3TwoTone } from "@mui/icons-material";

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
              <Link
                className="links"
                to={"/manager/" + params.row.id}
                style={{ textDecoration: "none" }}
              >
                <span>View Profile</span>
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
      <div className="dataTableTitle">
        <Link to="/employee/new" className="link">
          Add new manager
        </Link>
      </div>

      <DataGrid
        style={{ fontWeight: "700" }}
        className="datagrid"
        rows={data}
        columns={managerColumns.concat(actionColumn)}
        rowHeight={100}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
      />
    </div>
  );
};

export default Datatable;
