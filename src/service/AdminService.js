import axios from "axios";

const GET_ALL_ADMIN_INFO = "http://localhost:9091/api/v1/admin/getınfo?token=";

const UPDATE_ADMIN = "http://localhost:9091/api/v1/admin/update";

const LIST_DETAIL_INFORMATION =
  "http://localhost:9091/api/v1/admin/detail-information?token=";

class AdminService {
  getAllAdminInfo(token) {
    return axios.get(GET_ALL_ADMIN_INFO + token);
  }

  updateAdmin(data) {
    return axios.post(UPDATE_ADMIN, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  getAllAdminCount(token) {
    return axios.get(LIST_DETAIL_INFORMATION + token);
  }
}

export default new AdminService();
