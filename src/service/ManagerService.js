import axios from "axios";

const GET_ALL_MANAGER_SUMMARY_INFO =
  "http://localhost:9092/manager/get-all-summary";

const GET_INFO_MANAGER_WITH_ID = "http://localhost:9092/manager/manager/";

class ManagerService {
  getAllAdminSummaryInfo() {
    return axios.get(GET_ALL_MANAGER_SUMMARY_INFO);
  }

  getInfoForManagerWithId(id) {
    return axios.get(GET_INFO_MANAGER_WITH_ID + id);
  }
}

export default new ManagerService();
