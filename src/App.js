import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Profile from "./pages/profile/Profile";
import ListCompany from "./pages/listCompany/ListCompany";
import NewCompany from "./pages/newCompany/NewCompany";
import SingleCompany from "./pages/singlecompany/SingleCompany";
import NotFound from "./pages/notfound/NotFound";
import { SidebarProvider } from "./context/SidebarContext";
import { useEffect, useState, useContext } from "react";
import Calendar from "./pages/calendar/Calendar";
import Calendars from "./pages/calendar/Calendar";
import Inbox from "./pages/inbox/Inbox";

function App() {
  return (
    <div className="app">
      <SidebarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="calendar" element={<Calendars />} />
              <Route path="inbox" element={<Inbox />} />
              <Route path="manager">
                <Route index element={<List />} />
                <Route path=":managerId" element={<Single />} />
                <Route path="new" element={<New />} />
              </Route>
              {/* <Route path="employee">
              <Route index element={<ListEmployee />} />
              <Route path=":employeeId" element={<Single />} />
            </Route> */}
              <Route path="company">
                <Route index element={<ListCompany />} />
                <Route path=":companyId" element={<SingleCompany />} />
                <Route path="new" element={<NewCompany />} />
              </Route>
              <Route path="profile">
                <Route index element={<Profile />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </SidebarProvider>
    </div>
  );
}
export default App;
