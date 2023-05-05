import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./new.scss";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { managerRows } from "../../datatablesource";
import Table from "../../components/table/Tables";
import FileBase64 from "react-file-base64";
import withAuth from "../../withAuth";
import ManagerService from "../../service/ManagerService";

const New = () => {
  const [image, setImage] = useState("");

  const [newImage, setNewImage] = useState("");
  const [manager, setManager] = useState({
    email: "",
    firstName: "",
    surname: "",
    birthDate: "",
    address: "",
    phone: "",
    birthdayPlace: "",
    image: "",
    identificationNumber: "",
    dateOfEmployment: "",
  });

  const [array, setArray] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(manager);

    ManagerService.addManager(manager).then(
      () => {
        alert("başarılı");
        window.location.reload(true);
      },
      () => {
        alert("başarısız");
      }
    );
  };

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setNewImage(fileReader.result.split(",")[1]);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">Add new Manager</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              className="image"
            />
            <div className="formInput">
              <label htmlFor="file">
                <DriveFolderUploadIcon className="icon" />
              </label>
              <input
                type="file"
                id="file"
                onChange={onChangeImage}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label>Email</label>
                <input
                  type="email"
                  onChange={(e) =>
                    setManager({ ...manager, email: e.target.value })
                  }
                />
              </div>
              <div className="formInput">
                <label>Firstname</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setManager({ ...manager, firstName: e.target.value })
                  }
                />
              </div>
              <div className="formInput">
                <label>Surname</label>
                <input
                  type="text"
                  placeholder="Doe"
                  onChange={(e) =>
                    setManager({ ...manager, surname: e.target.value })
                  }
                />
              </div>
              <div className="formInput">
                <label>Birthday</label>
                <input
                  type="date"
                  onChange={(e) =>
                    setManager({ ...manager, birthDate: e.target.value })
                  }
                />
              </div>
              <div className="formInput">
                <label>Date Of Employment</label>
                <input
                  type="date"
                  onChange={(e) =>
                    setManager({ ...manager, dateOfEmployment: e.target.value })
                  }
                />
              </div>
              <div className="formInput">
                <label>Birthday Place</label>
                <input
                  type="text"
                  placeholder="Istanbul"
                  onChange={(e) =>
                    setManager({ ...manager, birthdayPlace: e.target.value })
                  }
                />
              </div>
              <div className="formInput">
                <label>Identification Number</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setManager({
                      ...manager,
                      identificationNumber: e.target.value,
                    })
                  }
                />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setManager({ ...manager, phone: e.target.value })
                  }
                />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setManager({ ...manager, address: e.target.value })
                  }
                />
              </div>

              <button
                onClick={(e) => {
                  if (newImage != "") {
                    setManager({
                      ...manager,

                      image: newImage,
                    });
                  }
                }}
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(New);
