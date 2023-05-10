import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DarkModeContext from "../../context/darkModeContext";
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

  const { darkMode } = useContext(DarkModeContext);
  const tableCellClasses = darkMode ? "tableCell dark" : "tableCell";
  return (
    <TableContainer
      component={Paper}
      className={darkMode ? "table dark" : "table"}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={darkMode ? "tableCell dark" : "tableCell"}>
              ID
            </TableCell>
            <TableCell className={darkMode ? "tableCell dark" : "tableCell"}>
              Image
            </TableCell>
            <TableCell className={darkMode ? "tableCell dark" : "tableCell"}>
              Firstname
            </TableCell>
            <TableCell className={darkMode ? "tableCell dark" : "tableCell"}>
              Surname
            </TableCell>
            <TableCell className={darkMode ? "tableCell dark" : "tableCell"}>
              Email
            </TableCell>
            <TableCell className={darkMode ? "tableCell dark" : "tableCell"}>
              Phone
            </TableCell>
            <TableCell className={darkMode ? "tableCell dark" : "tableCell"}>
              Address
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className={darkMode ? "tableCell dark" : "tableCell"}>
                {row.id}
              </TableCell>
              <TableCell className={darkMode ? "tableCell dark" : "tableCell"}>
                <img src={row.img} alt="" width="40" height="40" />
              </TableCell>
              <TableCell className={darkMode ? "tableCell dark" : "tableCell"}>
                {row.firtName}
              </TableCell>
              <TableCell className={darkMode ? "tableCell dark" : "tableCell"}>
                {row.surname}
              </TableCell>
              <TableCell className={darkMode ? "tableCell dark" : "tableCell"}>
                {row.email}
              </TableCell>
              <TableCell className={darkMode ? "tableCell dark" : "tableCell"}>
                {row.phone}
              </TableCell>
              <TableCell className={darkMode ? "tableCell dark" : "tableCell"}>
                {row.address}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
