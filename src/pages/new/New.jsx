import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./new.scss";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { managerRows } from "../../datatablesource";
import Table from "../../components/table/Tables";
import FileBase64 from "react-file-base64";
const New = () => {
  const [file, setFile] = useState("");

  const [manager, setManager] = useState({
    id: "21212",
    email: "",
    firstName: "",
    surname: "",
    birthdate: "",
    address: "",
    phone: "",
    placeOfBirth: "",
    image: "",
    identificationNumber: "",
  });

  const [array, setArray] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(manager);
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
                manager.image
                  ? URL.createObjectURL(manager.image)
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
                onChange={(e) =>
                  setManager({ ...manager, image: e.target.files[0] })
                }
                style={{ display: "none" }}
              />

              <FileBase64
                multiple={false}
                onDone={({ base64 }) =>
                  setManager({ ...manager, image: base64 })
                }
              />
            </div>
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  onChange={(e) =>
                    setManager({ ...manager, email: e.target.value })
                  }
                />
              </div>
              <div className="formInput">
                <label>Firstname</label>
                <input
                  type="text"
                  placeholder="John"
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
                    setManager({ ...manager, birthdate: e.target.value })
                  }
                />
              </div>
              <div className="formInput">
                <label>Birthday Place</label>
                <input
                  type="text"
                  placeholder="Istanbul"
                  onChange={(e) =>
                    setManager({ ...manager, placeOfBirth: e.target.value })
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

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
