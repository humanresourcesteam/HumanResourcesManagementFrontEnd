export const validateManagerForm = (manager) => {
    let errors = false;
    let newErrors = {};
    if (!manager.email ||
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(manager.email)
        ) {
        newErrors.email = "Enter a valid email address";
        errors = true;
    }
    if(!manager.firstName){
        newErrors.firstName = "The firstname field cannot be left blank";
        errors = true;
    }
    if(!manager.surname){
        newErrors.surname = "The surname field cannot be left blank";
        errors = true;
    }
    if(!manager.birthDate){
        newErrors.birthDate = "the birthday field cannot be left blank";
        errors = true;
    }
    if (!manager.dateOfEmployment) {
        newErrors.dateOfEmployment = "the Date of Employment cannot be left blank";
        errors = true;
    }
    if (!manager.birthdayPlace) {
        newErrors.birthdayPlace = "The Birthday place cannot be left blank";
        errors = true;
    }
    if (!manager.identificationNumber) {
        newErrors.identificationNumber = "cannot be left blank"
        errors = true;
    }else if(!/^\d{11}$/.test(manager.identificationNumber))
    {
        newErrors = "Identification number must consist of 11 digits ";
        errors = true;
    }
    if (!manager.phone) {
        newErrors.phone = "The manager number field cannot be left blank";
        errors = true;
      }
    if (!manager.address) {
        newErrors.address = "The address field cannot be left blank";
        errors = true;
      }
    return {errorsArray: newErrors,errors};
};