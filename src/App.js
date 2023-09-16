import { useState } from "react";
import Modal from "./Components/Modal";
import "./App.css";
import InputField from "./Components/InputField"; 
function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="backGround">
        <Modal  isOpen={isOpen} lable="SignUp" />
      </div>
    </>
  );
}

export default App;
