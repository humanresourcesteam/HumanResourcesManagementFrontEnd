import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";

import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import "./style/darkmode.scss";
import ListEmployee from "./pages/listEmployee/ListEmployee";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="manager">
              <Route index element={<List />} />
              <Route path=":managerId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="employee">
              <Route index element={<ListEmployee />} />
              <Route path=":employeeId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
