import axios from "axios";

const ADD_COMPANY = "http://localhost:9094/company/addcompany";

class CompanyService {
  addCompany(company) {
    return axios.post(ADD_COMPANY, company);
  }
}

export default new CompanyService();
