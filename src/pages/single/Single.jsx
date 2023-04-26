import "./single.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Firstname from "../../assets/user.png";
const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Melihcan Öztürk</h1>
            <div className="item">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <div className="detailItem">
                  <EmailOutlinedIcon className="icon" />
                  <span className="itemValue">melihcanozturk@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Firstname:</span>
                  <span className="itemValue">Melihcan</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Second Name:</span>
                  <span className="itemValue">Can</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Surname:</span>
                  <span className="itemValue">Öztürk</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Second surname:</span>
                  <span className="itemValue">-</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Birthday</span>
                  <span className="itemValue">27/07/2000</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Birthplace</span>
                  <span className="itemValue">Sakarya</span>
                </div>
              </div>
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">Identify Number:</span>
                  <span className="itemValue">12421512616</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Date of Entry Into Work</span>
                  <span className="itemValue">20/10/2010</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address</span>
                  <span className="itemValue">Kocaeli/Turkey</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone</span>
                  <span className="itemValue">+90-553-450-21-11</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default Single;
