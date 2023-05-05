import { useState } from "react";
import "./newcompany.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import withAuth from "../../withAuth";
import Select from "react-select";
import Cookies from "js-cookie";
import CompanyService from "../../service/CompanyService";
const NewCompany = () => {
  const [image, setImage] = useState("");
  const token = Cookies.get("token");
  const [selectedOption, setSelectedOption] = useState(null);
  const [newImage, setNewImage] = useState("");
  const [date, setDate] = useState("");
  const [company, setCompany] = useState({
    token: token,
    name: "",

    title: "",

    centralRegistrySystem: "",

    taxNumber: "",

    taxOffice: "",

    image: "",

    phone: "",

    address: "",

    email: "",

    numberOfWorkers: "",

    yearOfEstablishment: "",

    contractStartYear: "",

    contractEndYear: "",

    status: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(company);

    CompanyService.addCompany(company).then(
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
  };
  const handleDate = (e) => {
    const date = e.target.value;
    setDate(date);
  };

  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const statusSelect = [
    { value: "ACTIVE", label: "Active" },
    { value: "PASSIVE", label: "Passive" },
  ];
  const titleSelect = [
    { value: "JOIN_STOCK_COMPANY", label: "Join Stock Company" },
    { value: "LIMITED_COMPANY", label: "Limited Company" },
    { value: "COOPERATIVE", label: "Cooperative" },
    { value: "COLLECTIVE", label: "Collective" },
  ];
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">Add new Company</h1>
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
            <form onSubmit={handleSubmit} className="formcompany">
              <div className="formcompany">
                <div className="letf-side">
                  <div className="formInput">
                    <label>Company Mail</label>
                    <input
                      type="email"
                      onChange={(e) =>
                        setCompany({ ...company, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="formInput">
                    <label>Company Name</label>
                    <input
                      type="text"
                      onChange={(e) =>
                        setCompany({ ...company, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="formInput">
                    <label>Title</label>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isDisabled={isDisabled}
                      isLoading={isLoading}
                      isClearable={isClearable}
                      isRtl={isRtl}
                      isSearchable={isSearchable}
                      name="color"
                      options={titleSelect}
                      onChange={(e) => {
                        setCompany({ ...company, title: e.value });
                      }}
                    />
                  </div>
                  <div className="formInput">
                    <label>Mersis No</label>
                    <input
                      type="text"
                      onChange={(e) =>
                        setCompany({
                          ...company,
                          centralRegistrySystem: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="formInput">
                    <label>Tax Number</label>
                    <input
                      type="text"
                      onChange={(e) =>
                        setCompany({ ...company, taxNumber: e.target.value })
                      }
                    />
                  </div>
                  <div className="formInput">
                    <label>Tax Office</label>
                    <input
                      type="text"
                      onChange={(e) =>
                        setCompany({ ...company, taxOffice: e.target.value })
                      }
                    />
                  </div>

                  <div className="formInput">
                    <label>Phone</label>
                    <input
                      type="text"
                      onChange={(e) =>
                        setCompany({ ...company, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="right-side">
                  <div className="formInput">
                    <label>Foundation Year</label>
                    <input
                      type="date"
                      onChange={(e) =>
                        setCompany({
                          ...company,
                          yearOfEstablishment: new Date(e.target.value)
                            .toISOString()
                            .substring(0, 10),
                        })
                      }
                    />
                  </div>
                  <div className="formInput">
                    <label>Contract Start Date</label>
                    <input
                      type="date"
                      onChange={(e) =>
                        setCompany({
                          ...company,
                          contractStartYear: new Date(e.target.value)
                            .toISOString()
                            .substring(0, 10),
                        })
                      }
                    />
                  </div>
                  <div className="formInput">
                    <label>Contract End Date</label>
                    <input
                      type="date"
                      onChange={(e) =>
                        setCompany({
                          ...company,
                          contractEndYear: new Date(e.target.value)
                            .toISOString()
                            .substring(0, 10),
                        })
                      }
                    />
                  </div>
                  <div className="formInput">
                    <label>Activation Status</label>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isDisabled={isDisabled}
                      isLoading={isLoading}
                      isClearable={isClearable}
                      isRtl={isRtl}
                      isSearchable={isSearchable}
                      name="color"
                      options={statusSelect}
                      onChange={(e) => {
                        setCompany({ ...company, status: e.value });
                      }}
                    />
                  </div>
                  <div className="formInput">
                    <label>Address</label>
                    <input
                      type="text"
                      onChange={(e) =>
                        setCompany({ ...company, address: e.target.value })
                      }
                    />
                  </div>
                  <div className="formInput">
                    <label>Number of Employees</label>
                    <input
                      type="text"
                      onChange={(e) =>
                        console.log(
                          setCompany({
                            ...company,
                            numberOfWorkers: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={(e) => {
                  if (image != "") {
                    setCompany({
                      ...company,
                      image: image,
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

export default withAuth(NewCompany);
