import "./single.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Info from "../../assets/info.png";
const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <h2>Melihcan Öztürk</h2>
        </div>
        <div className="bottom">
          <div className="bottom-top">
            <img
              src={
                "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              className="image"
            />
          </div>
          <div className="bottom-bot">
            <div className="personal">
              <div className="formInput">
                <label>Email</label>
                <input type="email" />
              </div>
              <div className="formInput">
                <label>Firstname</label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>Second name</label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>Surname</label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>Second surname</label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>Birthday</label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>Birthday Place</label>
                <input type="text" />
              </div>
            </div>
            <div className="work">
              <div className="formInput">
                <label>Identification Number</label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>Date Of Employment</label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
