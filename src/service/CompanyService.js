import axios from "axios";

const ADD_COMPANY = "http://localhost:9094/company/addcompany";

const GET_SUMMARY_ALL_COMPANY = "http://localhost:9094/company/get-all-summary";

class CompanyService {
  addCompany(company) {
    return axios.post(ADD_COMPANY, company, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  getSummaryAllCompany() {
    return axios.get(GET_SUMMARY_ALL_COMPANY);
  }
}

export default new CompanyService();
