import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./new.scss";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import withAuth from "../../withAuth";
import ManagerService from "../../service/ManagerService";
import CompanyService from "../../service/CompanyService";
import { useNavigate, useLocation } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import { validateManagerForm } from "../../utils/validatemanager";
const New = () => {
  const [optionList, setOptionList] = useState([]);
  const [newImage, setNewImage] = useState("");
  const [selectedOptions, setSelectedOptions] = useState(null);
  const history = useNavigate();
  const location = useLocation();
  const inputFileRef = useRef(null);
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
    companyName: "",
  });

  const handleImageClick = () => {
    inputFileRef.current.click();
  };

  useEffect(() => {
    CompanyService.getSummaryAllCompany().then((response) => {
      const options = response.data.map((company) => ({
        value: company.name,
        label: company.name,
      }));
      setOptionList(options);
    });
    const selectedCompanyName = location.state?.selectedCompanyName;
    if (selectedCompanyName) {
      setSelectedOptions({
        value: selectedCompanyName,
        label: selectedCompanyName,
      });
    }
  }, []);

  //METHODS
  const handleSubmit = async (event) => {
    event.preventDefault();
    ManagerService.addManager(manager).then(
      () => {
        alert("başarılı");
      },
      (response) => {
        alert(response.response.data.message);
      }
    );
  };

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    setNewImage(file);
  };

  // Validations in the /utils/validatemanager class were used to catch errors
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const { errorsArray: newErrors, errors } = validateManagerForm(manager);
    setErrors(newErrors);
    return errors;
  };

  const handleSelect = (selectedOption) => {
    setSelectedOptions(selectedOption);

    if (selectedOption && selectedOption.__isNew__) {
      history("/company/new", { state: { companyName: selectedOption.value } });
    }
  };
  const [isClearable, setIsClearable] = useState(true);

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
                newImage
                  ? URL.createObjectURL(newImage)
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
                ref={inputFileRef}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <CreatableSelect
                  className="select"
                  options={optionList}
                  placeholder="Select Company"
                  value={selectedOptions}
                  onChange={handleSelect}
                  formatCreateLabel={(inputValue) =>
                    `Add Company: ${inputValue}`
                  }
                />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input
                  type="email"
                  onChange={(e) =>
                    setManager({ ...manager, email: e.target.value })
                  }
                />
                {errors.email && <small>{errors.email}</small>}
              </div>
              <div className="formInput">
                <label>Firstname</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setManager({ ...manager, firstName: e.target.value })
                  }
                />
                {errors.firstName && <small>{errors.firstName}</small>}
              </div>
              <div className="formInput">
                <label>Surname</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setManager({ ...manager, surname: e.target.value })
                  }
                />
                {errors.surname && <small>{errors.surname}</small>}
              </div>
              <div className="formInput">
                <label>Birthday</label>
                <input
                  type="date"
                  onChange={(e) =>
                    setManager({
                      ...manager,
                      birthDate: new Date(e.target.value)
                        .toISOString()
                        .substring(0, 10),
                    })
                  }
                />
                {errors.birthDate && <small>{errors.birthDate}</small>}
              </div>
              <div className="formInput">
                <label>Date Of Employment</label>
                <input
                  type="date"
                  onChange={(e) =>
                    setManager({
                      ...manager,
                      dateOfEmployment: new Date(e.target.value)
                        .toISOString()
                        .substring(0, 10),
                    })
                  }
                />
                {errors.dateOfEmployment && (
                  <small>{errors.dateOfEmployment}</small>
                )}
              </div>
              <div className="formInput">
                <label>Birthday Place</label>
                <input
                  type="text"
                  placeholder="Istanbul"
                  onChange={(e) =>
                    setManager({
                      ...manager,
                      birthdayPlace: e.target.value,
                    })
                  }
                />
                {errors.birthdayPlace && <small>{errors.birthdayPlace}</small>}
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
                {errors.identificationNumber && (
                  <small>{errors.identificationNumber}</small>
                )}
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setManager({ ...manager, phone: e.target.value })
                  }
                />
                {errors.phone && <small>{errors.phone}</small>}
              </div>
              <div className="formInput">
                <label>Address</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setManager({ ...manager, address: e.target.value })
                  }
                />
                {errors.address && <small>{errors.address}</small>}
              </div>
              <button
                onClick={(e) => {
                  if (newImage != "") {
                    setManager({
                      ...manager,
                      image: newImage,
                      companyName: selectedOptions.value,
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
