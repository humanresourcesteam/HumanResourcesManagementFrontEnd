import axios from "axios";

const GET_ALL_MANAGER_SUMMARY_INFO =
  "http://localhost:9092/api/v1/manager/get-all-summary";

const GET_INFO_MANAGER_WITH_ID =
  "http://localhost:9092/api/v1/manager/manager/";

const ADD_MANAGER = "http://localhost:9092/api/v1/manager/add";

const GET_5_MANAGER = "http://localhost:9092/api/v1/manager/find-five-manager";
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
}

export default new ManagerService();
