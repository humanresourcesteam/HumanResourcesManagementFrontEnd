import axios from "axios";

const GET_ALL_ADMIN_INFO = "http://localhost:9091/admin/getınfo?token="

const UPDATE_ADMIN = "http://localhost:9091/admin/update"


class AdminService {
    getAllAdminInfo(token){
        return axios.get(GET_ALL_ADMIN_INFO+token)
    }

    updateAdmin(data){
        return axios.put(UPDATE_ADMIN,data)
    }
}

export  default new AdminService();

