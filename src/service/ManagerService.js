import axios from "axios";

const GET_ALL_MANAGER_SUMMARY_INFO = "http://localhost/manager/get-all-summary";

const GET_INFO_MANAGER_WITH_ID = "http://localhost/manager/manager/";

const ADD_MANAGER = "http://localhost/manager/add";

const GET_5_MANAGER = "http://localhost/manager/find-five-manager";

const MANAGER_INFO_FOR_COMPANY =
  "http://localhost/manager/manager-company-info/";

class ManagerService {
  getAllAdminSummaryInfo() {
    return axios.get(GET_ALL_MANAGER_SUMMARY_INFO);
  }

  getInfoForManagerWithId(id) {
    return axios.get(GET_INFO_MANAGER_WITH_ID + id);
  }

  addManager(data) {
    return axios.post(ADD_MANAGER, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  getFiveManager() {
    return axios.get(GET_5_MANAGER);
  }

  getManagerInfoForCompany(companyId) {
    return axios.get(MANAGER_INFO_FOR_COMPANY + companyId);
  }
}

export default new ManagerService();
