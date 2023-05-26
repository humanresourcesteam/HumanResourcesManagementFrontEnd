import "./profile.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import AdminService from "../../service/AdminService";
import { useEffect, useState, useRef } from "react";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import withAuth from "../../withAuth";
import { SidebarContext } from "../../context/SidebarContext";
import { useContext } from "react";
const Profile = () => {
  const { isSidebarVisible } = useContext(SidebarContext);
  const token = Cookies.get("token");
  const [admin, setAdmin] = useState({});
  const inputFileRef = useRef(null);
  const [data, setData] = useState({
    firstName: "",
    surname: "",
    email: "",
    image: "",
    token: token,
  });
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("");

  const handleImageClick = () => {
    inputFileRef.current.click();
  };
  const onChangeImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  useEffect(() => {
    if (token) {
      AdminService.getAllAdminInfo(token).then((response) => {
        setAdmin((admin) => ({
          ...admin,
          ...response.data,
        }));
        setDate(response.data.dateOfEmployment);
        setEmail(response.data.email);
        setFirstName(response.data.firstName);
        setSurname(response.data.surname);
        setRole(response.data.role);
      });
    }
  }, [token]);

  const handleSubmit = (event) => {
    event.preventDefault();

    AdminService.updateAdmin(data).then(
      () => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });

        // window.location.reload(true);
      },
      (response) => {
        if (response.response.status === 405) {
          window.location.replace("/profile");
        } else {
          alert(response.response.data.message);
        }
      }
    );
  };
  return (
    <div className="single">
      {isSidebarVisible && <Sidebar />}

      <div className="profileContainer">
        <Navbar />

        <div className="top">
          <h2>{admin.firstName + " " + admin.surname}</h2>
        </div>
        <div className="bottom">
          <form onSubmit={handleSubmit}>
            <div className="bottom-top">
              <img
                src={image ? URL.createObjectURL(image) : admin.image}
                className="image"
                onClick={handleImageClick}
              />
            </div>
            <label htmlFor="file"></label>
            <input
              type="file"
              id="file"
              ref={inputFileRef}
              onChange={onChangeImage}
              style={{ display: "none" }}
            />

            <div className="bottom-bot">
              <div className="personal">
                <div className="formInput">
                  <label>Email</label>
                  <input
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                  />
                </div>
                <div className="formInput">
                  <label>Firstname</label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    value={firstName}
                  />
                </div>
                <div className="formInput">
                  <label>Surname</label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setSurname(e.target.value);
                    }}
                    value={surname}
                  />
                </div>
              </div>
              <div className="work">
                <div className="formInput">
                  <label>Date Of Employment</label>
                  <input type="date" disabled value={date} />
                </div>
                <div className="formInput">
                  <label>Role</label>
                  <input type="text" value={role} disabled />
                </div>
                <div className="formInput">
                  <button
                    className="button"
                    type="submit"
                    onClick={(e) => {
                      if (image != "") {
                        setData({
                          ...data,
                          //  dateOfEmployment: date,
                          email: email,
                          surname: surname,
                          firstName: firstName,
                          image: image,
                        });
                      } else {
                        setData({
                          ...data,
                          //    dateOfEmployment: date,
                          email: email,
                          surname: surname,
                          firstName: firstName,
                          image: null,
                        });
                      }
                    }}
                  >
                    SEND
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Profile);
