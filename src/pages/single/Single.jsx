import "./single.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ManagerService from "../../service/ManagerService";
import withAuth from "../../withAuth";

const Single = () => {
  let params = useParams();
  const [manager, setManager] = useState({});
  useEffect(() => {
    ManagerService.getInfoForManagerWithId(params.managerId).then(
      (response) => {
        setManager({ ...response.data });
      }
    );
  }, []);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <h2>{manager.firstName + " " + manager.surname}</h2>
        </div>
        <div className="bottom">
          <div className="bottom-top">
            <img
              src={
                manager.image
                  ? manager.image
                  : "https://images.unsplash.com/photo-1683097504876-42a726767b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
              }
              className="image"
            />
          </div>
          <div className="bottom-bot">
            <div className="personal">
              <div className="formInput">
                <label>Email</label>
                <input type="email" value={manager.email} />
              </div>
              <div className="formInput">
                <label>Firstname</label>
                <input type="text" value={manager.firstName} />
              </div>

              <div className="formInput">
                <label>Surname</label>
                <input type="text" value={manager.email} />
              </div>

              <div className="formInput">
                <label>Birthday</label>
                <input type="text" value={manager.birthDate} />
              </div>
              <div className="formInput">
                <label>Birthday Place</label>
                <input type="text" value={manager.birthdayPlace} />
              </div>
            </div>
            <div className="work">
              <div className="formInput">
                <label>Identification Number</label>
                <input type="text" value={manager.identificationNumber} />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" value={manager.phone} />
              </div>
              <div className="formInput">
                <label>Date Of Employment</label>
                <input type="text" value={manager.dateOfEmployment} />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" value={manager.address} />
              </div>
            </div>
          </div>
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default withAuth(Single);
