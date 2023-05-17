import { useState, useRef } from "react";
import "./newcompany.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import withAuth from "../../withAuth";
import Select from "react-select";
import Cookies from "js-cookie";
import CompanyService from "../../service/CompanyService";
import { useLocation, useNavigate } from "react-router-dom";
import { validateCompanyForm } from "../../utils/validate";
const NewCompany = () => {
  const [image, setImage] = useState("");
  const token = Cookies.get("token");
  const location = useLocation();
  const navigate = useNavigate();
  const companyName = location.state?.companyName;
  const inputFileRef = useRef(null);
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
  const [phone, setPhone] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(company);
    if (!validateForm()) {
      const date = new Date(company.contractStartYear);
      CompanyService.addCompany(company).then(
        () => {
          alert("başarılı");
          if (companyName != "") {
            navigate("/manager/new", {
              state: { selectedCompanyName: company.name },
            });
          }
          navigate("/company");
        },
        () => {
          alert("başarısız");
        }
      );
    }
  };

  const handleImageClick = () => {
    inputFileRef.current.click(); // Trigger the click event on the input element
  };

  // Validations in the /utils/validation class were used to catch errors
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const { errorsArray: newErrors, errors } = validateCompanyForm(company);
    setErrors(newErrors);
    return errors;
  };

  //method used to adjust the photo
  const onChangeImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
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
              onClick={handleImageClick}
            />
            <div className="formInput">
              <label htmlFor="file"></label>
              <input
                type="file"
                id="file"
                onChange={onChangeImage}
                style={{ display: "none" }}
                ref={inputFileRef}
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
                    {errors.email && <small>{errors.email}</small>}
                  </div>
                  <div className="formInput">
                    <label>Company Name</label>
                    <input
                      type="text"
                      onChange={(e) =>
                        setCompany({ ...company, name: e.target.value })
                      }
                    />
                    {errors.name && <small>{errors.name}</small>}
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
                    {errors.title && <small>{errors.title}</small>}
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
                    {errors.centralRegistrySystem && (
                      <small>{errors.centralRegistrySystem}</small>
                    )}
                  </div>
                  <div className="formInput">
                    <label>Tax Number</label>
                    <input
                      type="text"
                      onChange={(e) =>
                        setCompany({ ...company, taxNumber: e.target.value })
                      }
                    />
                    {errors.taxNumber && <small>{errors.taxNumber}</small>}
                  </div>
                  <div className="formInput">
                    <label>Tax Office</label>
                    <input
                      type="text"
                      onChange={(e) =>
                        setCompany({ ...company, taxOffice: e.target.value })
                      }
                    />
                    {errors.taxOffice && <small>{errors.taxOffice}</small>}
                  </div>

                  <div className="formInput">
                    <label>Phone</label>
                    <PhoneInput
                      className="phoneInput"
                      placeholder="Enter phone number"
                      value={"90"}
                      onChange={setPhone}
                      defaultCountry="TR"
                    />
                    {errors.phone && <small>{errors.phone}</small>}
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
                      max={new Date().toISOString().substring(0, 10)}
                    />
                    {errors.yearOfEstablishment && (
                      <small>{errors.yearOfEstablishment}</small>
                    )}
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
                    {errors.contractStartYear && (
                      <small>{errors.contractStartYear}</small>
                    )}
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
                    {errors.contractEndYear && (
                      <small>{errors.contractEndYear}</small>
                    )}
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
                    {errors.status && <small>{errors.status}</small>}
                  </div>
                  <div className="formInput">
                    <label>Address</label>
                    <input
                      type="text"
                      onChange={(e) =>
                        setCompany({ ...company, address: e.target.value })
                      }
                    />
                    {errors.address && <small>{errors.address}</small>}
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
                    {errors.numberOfWorkers && (
                      <small>{errors.numberOfWorkers}</small>
                    )}
                  </div>
                </div>
              </div>
              <button
                onClick={(e) => {
                  if (image != "") {
                    setCompany({
                      ...company,
                      image: image,
                      phone: phone,
                    });
                  } else {
                    setCompany({
                      ...company,
                      phone: phone,
                      image: null,
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
