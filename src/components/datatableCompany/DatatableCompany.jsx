import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { managerColumns, managerRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

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
      <DataGrid
        className="datagrid"
        rows={data}
        columns={managerColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
