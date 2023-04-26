import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widgets/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Tables from "../../components/table/Tables";
import Table from "../../components/table/Tables";
import WidgetNewEmployee from "../../components/widgetNewEmployee/WidgetNewEmployee";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      {/* HOME CONTAINER */}
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="manager" />
          <Widget type="employee" />
          <Widget type="total" />
        </div>
        {/* CHART AREA */}
        <div className="charts">
          <WidgetNewEmployee />
          <Chart />
        </div>

        <div className="listContainer">
          <div className="listTitle">All Employee</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;

// const rows = [
//   {
//     id: 1143155,
//     firtName: "Melihcan",
//     img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
//     surname: "Ozturk",
//     email: "melihcan@gmail.com",
//     phone: 555 - 555 - 55 - 55,
//     address: "izmit/kocaeli",
//   },
//   {
//     id: 111243155,
//     firtName: "Berkin",
//     img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
//     surname: "Yardımcı",
//     email: "berkin@gmail.com",
//     phone: 555 - 555 - 55 - 55,
//     address: "izmit/kocaeli",
//   },
//   {
//     id: 1141123155,
//     firtName: "Acer Nitro 5",
//     img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
//     surname: "John Smith",
//     email: "melihcan@gmail.com",
//     phone: 555 - 555 - 55 - 55,
//     address: "izmit/kocaeli",
//   },
//   {
//     id: 1141213155,
//     firtName: "Ali ",
//     img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
//     surname: "Ogutcen",
//     email: "aliogutcen@gmail.com",
//     phone: 555 - 555 - 55 - 55,
//     address: "izmit/kocaeli",
//   },
//   {
//     id: 112143155,
//     firtName: "Mert",
//     img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
//     surname: "Namsal",
//     email: "mertnamsal@gmail.com",
//     phone: 555 - 555 - 55 - 55,
//     address: "izmit/kocaeli",
//   },
// ];
