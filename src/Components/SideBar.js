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
import { NavLink } from "react-router-dom";
import "./SideBar.css";
import { useState } from "react";

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const menuItems = [
    {
      path: "",
      name: "Students Records",
      icon: <FaUserGraduate />,
    },
    {
      path: "",
      name: "Reports",
      icon: <MdContactPage />,
    },
    {
      path: "",
      name: "Fee",
      icon: <MdContactPage />,
    },
    {
      path: "",
      name: "Examinations",
      icon: <IoIosBook />,
    },
    {
      path: "",
      name: "Staff",
      icon: <FaUsers />,
    },
    {
      path: " ",
      name: "Transport",
      icon: <FaBusAlt />,
    },
    {
      path: " ",
      name: "Finance",
      icon: <FaCoins />,
    },
    {
      path: "",
      name: "Settings",
      icon: <IoMdSettings />,
    },
    {
      path: "",
      name: "Utilities",
      icon: <FaTools />,
    },
    {
      path: "",
      name: "Messaging",
      icon: <BiSolidMessageRoundedDetail />,
    },
  ];
  return (
    <>
      <div className="cont">
        <div style={{ width: isOpen ? "300px" : "60px" }} className="sidebar">
          <div className="top-section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              SMS
            </h1>
            <div
              style={{ marginLeft: isOpen ? "120px" : "0" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          {menuItems.map((items, index) => (
            <NavLink
              to={items.path}
              key={index}
              className="link"
              activeclassName="active"
            >
              <div className="icon">{items.icon}</div>
              <div className="link_txt">{items.name}</div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
