import axios from "axios";

const GET_COUNT_EMPLOYEE =
  "http://localhost:9093/api/v1/workers/get-new-employee";

class WorkerService {
  getAllWorker() {
    return axios.get(GET_COUNT_EMPLOYEE);
  }
}

export default new WorkerService();
