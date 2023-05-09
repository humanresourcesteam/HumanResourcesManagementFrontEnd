export const validateCompanyForm = (company) => {
  let errors = false;
  let newErrors = {};
  if (
    !company.email ||
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(company.email)
  ) {
    newErrors.email = "Enter a valid email address";
    errors = true;
  }
  if (!company.title) {
    newErrors.title = "The header field cannot be left blank";
    errors = true;
  }
  if (!company.centralRegistrySystem) {
    newErrors.centralRegistrySystem = "Mersin no field cannot be left blank";
    errors = true;
  } else if (!/^\d{12}$/.test(company.centralRegistrySystem)) {
    newErrors.centralRegistrySystem =
      "Mersis No should only consist of 12 digit numbers";
    errors = true;
  }
  if (!company.taxNumber) {
    newErrors.taxNumber = "Tax no field cannot be left blank";
    errors = true;
  } else if (!/^\d{10}$/.test(company.taxNumber)) {
    newErrors.taxNumber = "Tax no should only consist of 10 digit numbers";
    errors = true;
  }
  if (!company.taxOffice) {
    newErrors.taxOffice = "The Tax Office field cannot be left blank";
    errors = true;
  } else if (!/^[a-zA-ZğüşöçıĞÜŞÖÇİ\s]+$/i.test(company.taxOffice)) {
    newErrors.taxOffice = "The Tax Office field must only consist of letters";
    errors = true;
  }
  if (!company.phone) {
    newErrors.phone = "The telephone number field cannot be left blank";
    errors = true;
  }
  if (!company.yearOfEstablishment) {
    newErrors.yearOfEstablishment =
      "The Year of Establishment field cannot be left blank";
    errors = true;
  }
  if (!company.contractStartYear) {
    newErrors.contractStartYear =
      "Contract Start Date field cannot be left blank";
    errors = true;
  }
  if (company.contractStartYear && company.contractEndYear) {
    const start = new Date(company.contractStartYear);
    const end = new Date(company.contractEndYear);
    if (start >= end) {
      newErrors.contractEndYear =
        "Contract End date must be after Contract Start date";
      errors = true;
    }
  }
  if (company.status === undefined) {
    newErrors.status = "The Activation Status field cannot be left blank";
    errors = true;
  }
  if (!company.address) {
    newErrors.address = "The address field cannot be left blank";
    errors = true;
  }
  if (!company.numberOfWorkers) {
    newErrors.numberOfWorkers =
      "Number of Employees field cannot be left blank";
    errors = true;
  } else if (isNaN(company.numberOfWorkers) || company.numberOfWorkers < 0) {
    newErrors.numberOfWorkers = "Number of Employees must be a valid number";
    errors = true;
  }
  return { errorsArray: newErrors, errors };
};
