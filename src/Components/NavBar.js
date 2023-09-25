import React from "react";
import "../Components/NavBar.css";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  const gotoSignIn = () => {
    navigate("/");
  };
  return (
    <>
      <header className="container">
        <nav className="navBar">
          <h3
            style={{
              color: "white",
              fontFamily: "sans-serif",
              fontWeight: "500",
            }}
          >
            SafeCare
          </h3>
          <div className="btn">
            <Button
              go={() => gotoSignIn()}
              color="#04213F"
              title="LogOut"
            ></Button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
