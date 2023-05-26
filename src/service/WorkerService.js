import axios from "axios";

const GET_COUNT_EMPLOYEE = "http://localhost/workers/getallworker";

class WorkerService {
  getAllWorker() {
    return axios.get(GET_COUNT_EMPLOYEE);
  }
}

export default new WorkerService();
