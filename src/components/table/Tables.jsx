import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
const List = () => {
  const rows = [
    {
      id: 1,
      firtName: "Melihcan",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      surname: "Ozturk",
      email: "melihcan@gmail.com",
      phone: 5555555555,
      address: "izmit/kocaeli",
    },
    {
      id: 2,
      firtName: "Berkin",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      surname: "Yardımcı",
      email: "berkin@gmail.com",
      phone: 5555555555,
      address: "izmit/kocaeli",
    },
    {
      id: 3,
      firtName: "Buse",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      surname: "can",
      email: "melihcan@gmail.com",
      phone: 5555555555,
      address: "izmit/kocaeli",
    },
    {
      id: 4,
      firtName: "Ali ",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      surname: "Ogutcen",
      email: "aliogutcen@gmail.com",
      phone: 5555555555,
      address: "izmit/kocaeli",
    },
    {
      id: 5,
      firtName: "Mert",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      surname: "Namsal",
      email: "mertnamsal@gmail.com",
      phone: 5555555555,
      address: "izmit/kocaeli",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Firstname</TableCell>
            <TableCell>Surname</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>
                <img src={row.img} alt="" width="40" height="40" />
              </TableCell>
              <TableCell>{row.firtName}</TableCell>
              <TableCell>{row.surname}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
