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
import imglogo from "../Pages/Auths/SC-Logo.png";

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
        <div
          style={{ display: isOpen ? "flex" : "none" }}
          className="h-12 w-[11%] flex items-center justify-center bg-green-300"
        >
          {/* <h1 className=" font-popins text-[15px] font-extrabold text-center">
            SafeCare-School-System
          </h1> */}
          <img src={imglogo} alt="" className="h-12 w-[96%]" />
        </div>
        <div
          onClick={toggle}
          style={{ backgroundColor: isOpen ? "rgb(134, 239, 172)" : "#27A558" }}
          className="bars h-12 w-12 flex justify-center items-center bg-green-300"
        >
          <FaBars style={{color:isOpen? "#04213F" : "white"}}  />
        </div>
        <div className="h-12 w-[9rem] flex justify-center items-center">
          <h2 className="middle-txt font-popins">SafeCare</h2>
        </div>
      </div>
      <div className="cont">
        <div style={{ width: isOpen ? "250px" : "60px" }} className="sidebar">
          {menuItems.map((items, index) => (
            <NavLink to={items.path} key={index} className="link">
              <div className="icon">{items.icon}</div>
              <div
                style={{ display: isOpen ? "" : "none" }}
                className="link_txt font-popins line-clamp-1"
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
