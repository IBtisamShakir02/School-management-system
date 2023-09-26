import SignUp from "./Pages/Auths/SignUp";
import SignIn from "./Pages/Auths/SignIn";
import Error from "./Pages/Auths/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Home from "./Pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
      <SideBar >
        <Routes>
          <Route path="/" element={<SignIn lable="SignIn" />} />
          <Route path="/SignUp" element={<SignUp lable="SignUp" />} />
          <Route path="/Home" element={<Home/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
        </SideBar>
      </BrowserRouter>
    </>
  );
}

export default App;
