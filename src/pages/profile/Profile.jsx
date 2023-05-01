import "./profile.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import AdminService from "../../service/AdminService";
import { useEffect, useState } from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

const Profile = () => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJiaWxnZWFkYW0iLCJpZCI6MywiZXhwIjoxNjgyODQ1NDA5LCJpYXQiOjE2ODI4MDk0MDl9.5EiA-3J3ivPZ3rBaxX56IceAHzkhzicqjTrGrdto931ibA1oYIgxqhNmNQ5gkAszbjTHSC3ykB_sautq2OEMrg";

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
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setNewImage(fileReader.result);
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
      setImage(response.data.image);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    AdminService.updateAdmin(data).then(
      () => {
        alert("gunclellem basarılı");
      },
      () => {
        alert("başaramadık.");
      }
    );
    console.log(data);
  };

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
                  newImage
                    ? newImage
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                className="image"
                tempImage={newImage}
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
                  type="submit"
                  onClick={(e) => {
                    setData({
                      ...data,
                      dateOfEmployment: date,
                      email: email,
                      surname: surname,
                      firstName: firstName,
                      image: newImage,
                    });
                  }}
                >
                  gönder lan
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
