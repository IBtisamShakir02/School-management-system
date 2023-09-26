import React from "react";
import {
  FaUserGraduate,
  FaUsers,
  FaBusAlt,
  FaCoins,
  FaTools,
  FaBars,
} from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { IoMdSettings, IoIosBook } from "react-icons/io";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "./SideBar.css";
import { useState } from "react";

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const size = ["20px"];
  const menuItems = [
    {
      path: "",
      name: "Student Records",
      icon: <FaUserGraduate size={size} />,
    },
    {
      path: "",
      name: "Student Reports",
      icon: <MdContactPage size={size} />,
    },
    {
      path: "",
      name: "Student Fee Reports",
      icon: <FaMoneyBillTrendUp size={size} />,
    },
    {
      path: "",
      name: "Examinations",
      icon: <IoIosBook size={size} />,
    },
    {
      path: "",
      name: "Staff Records",
      icon: <FaUsers size={size} />,
    },
    {
      path: " ",
      name: "Transport",
      icon: <FaBusAlt size={size} />,
    },
    {
      path: " ",
      name: "Finance",
      icon: <FaCoins size={size} />,
    },
    {
      path: "",
      name: "Settings",
      icon: <IoMdSettings size={size} />,
    },
    {
      path: "",
      name: "Utilities",
      icon: <FaTools size={size} />,
    },
    {
      path: "",
      name: "Messaging",
      icon: <BiSolidMessageRoundedDetail size={size} />,
    },
  ];
  return (
    <>
      <div className="navbar">
        <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
          S-M-S
        </h1>{" "}
        <div style={{ marginLeft: isOpen ? "100px" : "16px" }} className="bars">
          <FaBars onClick={toggle} />
        </div>
        <h2 className="middle-txt">SafeCare</h2>
      </div>
      <div className="cont">
        <div style={{ width: isOpen ? "250px" : "60px" }} className="sidebar">
          <div className="top-section"></div>
          {menuItems.map((items, index) => (
            <NavLink to={items.path} key={index} className="link">
              <div className="icon">{items.icon}</div>
              <div
                style={{ display: isOpen ? "" : "none" }}
                className="link_txt"
              >
                {items.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
