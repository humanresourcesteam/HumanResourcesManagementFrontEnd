import "./inbox.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
const Inbox = () => {
  return (
    <div className="inbox">
      <Sidebar />
      <div className="inboxContainer">
        <Navbar />
      </div>
    </div>
  );
};

export default Inbox;
