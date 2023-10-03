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
import { AiFillDashboard } from "react-icons/ai";
import { CgShapeCircle } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import "./SideBar.css";
import { useState } from "react";
import imglogo from "../Pages/Auths/SC-Logo.png";

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setOpenMenu] = useState({});
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const submenu = (menuItemIndex) => {
    setOpenMenu({
      ...menuOpen,
      [menuItemIndex]: !menuOpen[menuItemIndex],
    });
  };
  const size = ["20px"];
  const size2 = ["18px"];
  const menuItems = [
    {
      path: "/Home",
      name: "Dashboard",
      icon: <AiFillDashboard size={22} />,
    },
    {
      name: "Student Records",
      icon: <FaUserGraduate size={size} />,
      submenu: [
        {
          path: "",
          name: "Admission Form",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Student List",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Leaving Certificate",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Daily Attendance",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Generate Fee Bill",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Fee Bill Receiving",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Late Fee Fine",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Change Class Fee",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Print I.D Card",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Transfer Letter",
          icon: <CgShapeCircle size={size2} />,
        },
      ],
    },
    {
      name: "Student Reports",
      icon: <MdContactPage size={size} />,
    },
    {
      name: "Student Fee Reports",
      icon: <FaMoneyBillTrendUp size={size} />,
    },
    {
      name: "Examinations",
      icon: <IoIosBook size={size} />,
    },
    {
      name: "Staff Records",
      icon: <FaUsers size={size} />,
    },
    {
      name: "Transport",
      icon: <FaBusAlt size={size} />,
    },
    {
      name: "Finance",
      icon: <FaCoins size={size} />,
    },
    {
      name: "Settings",
      icon: <IoMdSettings size={size} />,
    },
    {
      name: "Utilities",
      icon: <FaTools size={size} />,
    },
    {
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
          <img src={imglogo} alt="" className="h-12 w-[96%] animate-pulse" />
        </div>
        <div
          onClick={toggle}
          style={{ backgroundColor: isOpen ? "rgb(134, 239, 172)" : "#27A558" }}
          className="bars h-12 w-12 flex justify-center items-center bg-green-300"
        >
          <FaBars style={{ color: isOpen ? "#04213F" : "white" }} />
        </div>
        <div className="h-12 w-[9rem] flex justify-center items-center">
          <h2 className="middle-txt font-popins animate-pulse">SafeCare</h2>
        </div>
      </div>
      <div className="cont">
        <div style={{ width: isOpen ? "250px" : "60px" }} className="sidebar ">
          {menuItems.map((menuItems, index) => (
            <div key={index}>
              {/* Main Menu Item */}
              <NavLink
                to={menuItems.path}
                className="link"
                onClick={() => submenu(index)}
              >
                <div className="icon">{menuItems.icon}</div>

                <div
                  style={{ display: isOpen ? "" : "none" }}
                  className="link_txt font-popins line-clamp-1"
                >
                  {menuItems.name}
                </div>
              </NavLink>
              {/* Sub-Menu Items */}
              {menuItems.submenu && menuOpen[index] && (
                <div
                  className="bg-[#22567F]"
                  style={{ display: isOpen ? "" : "none" }}
                >
                  {menuItems.submenu.map((submenu, subIndex) => (
                    <NavLink
                      to={submenu.path}
                      key={subIndex}
                      className="sub-link font-popins line-clamp-1"
                    >
                      <div className="sub-icon">{submenu.icon}</div>
                      <div className="sub-txt font-popins text-sm">
                        {submenu.name}
                      </div>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
