import SignUp from "./Pages/Auths/SignUp";
import SignIn from "./Pages/Auths/SignIn";
import Error from "./Pages/Auths/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Home from "./Pages/Home";
import StudentList from "./Pages/StudentList";
import FeeBills from "./Pages/FeeBills";
import FeeBillsStudents from "./Pages/FeeBillsStudents";
import AdmissionFromComponent from "./Pages/AdmissionFromComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn lable="SignIn" />} />
        <Route path="/SignUp" element={<SignUp lable="SignUp" />} />
        {/* -------With SideBar--------- */}
        <Route path="/Home" element={<WithSideBarPage page={<Home />} />} />
        <Route
          path="/StudentList"
          element={<WithSideBarPage page={<StudentList />} />}
        />
        <Route
          path="/FeeBills"
          element={<WithSideBarPage page={<FeeBills />} />}
        />
        <Route
          path="/FeeBillsStudents"
          element={<WithSideBarPage page={<FeeBillsStudents />} />}
        />
        <Route
          path="/AdmissionFromComponent"
          element={<WithSideBarPage page={<AdmissionFromComponent />} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

function WithSideBarPage({ page }) {
  return <SideBar>{page}</SideBar>;
}

export default App;
