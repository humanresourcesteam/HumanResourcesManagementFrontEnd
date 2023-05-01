import "./profile.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import AdminService from "../../service/AdminService";
import { useEffect, useState } from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import Swal from "sweetalert2";

const Profile = () => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJiaWxnZWFkYW0iLCJpZCI6MSwiZXhwIjoxNjgzMDEwMjA5LCJpYXQiOjE2ODI5NzQyMDl9.RqKxqounelfP8ib-JCrTDjE4iFbmPkw5oETriLI7GZT8G1zwotpxtJ0o6ZNmArdbBzb2P-e3ec2XD3jRJNfFKw";

  const [admin, setAdmin] = useState({});

  const [data, setData] = useState({
    firstName: "",
    surname: "",
    email: "",
    dateOfEmployment: "",
    image: "",
    token: token,
  });

  const [date, setDate] = useState("");

  const [email, setEmail] = useState("");

  const [firstName, setFirstName] = useState("");

  const [surname, setSurname] = useState("");

  const [image, setImage] = useState("");

  const [newImage, setNewImage] = useState("");
  const onChangeImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setNewImage(fileReader.result.split(",")[1]);
    };
    fileReader.readAsDataURL(file);
  };

  useEffect(() => {
    AdminService.getAllAdminInfo(token).then((response) => {
      setAdmin((admin) => ({
        ...admin,
        ...response.data,
      }));
      setDate(response.data.dateOfEmployment);
      console.log(response.data.dateOfEmployment);
      setEmail(response.data.email);
      setFirstName(response.data.firstName);
      setSurname(response.data.surname);
      // setImage(response.data.image);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    console.log(newImage);
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

        setNewImage("NABER");
        window.location.reload(true);
      },
      () => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    );
  };

  console.log(newImage);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <h2>{admin.firstName + " " + admin.surname}</h2>
        </div>
        <div className="bottom">
          <form onSubmit={handleSubmit}>
            <div className="bottom-top">
              <img
                src={
                  image
                    ? URL.createObjectURL(image)
                    : "http://localhost:9091/images/" + admin.image
                }
                className="image"
              />
            </div>
            <label htmlFor="file">
              <DriveFolderUploadIcon className="icon" />
            </label>
            <input
              type="file"
              id="file"
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
                <button
                  className="button"
                  type="submit"
                  onClick={(e) => {
                    if (newImage != "") {
                      setData({
                        ...data,
                        dateOfEmployment: date,
                        email: email,
                        surname: surname,
                        firstName: firstName,
                        image: newImage,
                      });
                    } else {
                      setData({
                        ...data,
                        dateOfEmployment: date,
                        email: email,
                        surname: surname,
                        firstName: firstName,
                      });
                    }
                  }}
                >
                  SEND
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
