import { useState } from "react";
import Modal from "./Components/Modal";
import ModalSignIn from "./Components/ModalSignIn";
import "./App.css";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="backGround">
        <Modal  isOpen={isOpen} lable="SignUp"  />
        <ModalSignIn isOpen={true}  lable="SignIn" />
      </div>
    </>
  );
}

export default App;
