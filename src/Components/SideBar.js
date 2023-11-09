import React from "react";
import {
  FaUserGraduate,
  FaUsers,
  FaCoins,
  FaTools,
  FaBars,
} from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { IoMdSettings, IoIosBook } from "react-icons/io";
import { BiSolidMessageRoundedDetail, BiLogOutCircle } from "react-icons/bi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { AiFillDashboard } from "react-icons/ai";
import { CgShapeCircle } from "react-icons/cg";
import { BsCaretDownFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./SideBar.css";
import { useState } from "react";
import imglogo from "../Pages/Auths/SC-Logo.png";
import { useNavigate } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setOpenMenu] = useState({});
  const navigate = useNavigate();
  const toggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setOpenMenu({});
    }
  };
  const submenu = (menuItemIndex) => {
    const isSubMenuOpen = menuOpen[menuItemIndex];
    const updatedMenuOpen = {};
    if (!isSubMenuOpen) {
      updatedMenuOpen[menuItemIndex] = true;
    }
    setOpenMenu(updatedMenuOpen);
  };
  const closeSidebar = () => {
    if (isOpen) {
      setIsOpen(false);
      setOpenMenu({});
    }
  };
  const size = ["20px"];
  const size2 = ["18px"];
  const size3 = ["12px"];
  const menuItems = [
    {
      path: "/Home",
      name: "Dashboard",
      icon: <AiFillDashboard size={22} />,
    },
    {
      name: "Student Records",
      dicon: <BsCaretDownFill style={{ marginTop: 3 }} size={size3} />,
      icon: <FaUserGraduate size={size} />,
      submenu: [
        {
          path: "",
          name: "Admission Form",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "/StudentList",
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
          path: "/FeeBills",
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
      dicon: <BsCaretDownFill style={{ marginTop: 3 }} size={size3} />,
      icon: <MdContactPage size={size} />,
      submenu: [
        {
          path: "",
          name: "Current Students",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Class Strength",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Student Contacts",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Incomplete Docs",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Class and Age Wise Enrollment",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Left Students",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Admission Report",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Yearly Admission Summary",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "House Wise Report",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Absent Report",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Admission Info Check",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Siblings Report",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "OverAll Summary",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Attendance Report",
          icon: <CgShapeCircle size={size2} />,
        },
      ],
    },
    {
      name: "Student Fee Reports",
      dicon: <BsCaretDownFill style={{ marginTop: 3 }} size={size3} />,
      icon: <FaMoneyBillTrendUp size={size} />,
      submenu: [
        {
          path: "",
          name: "Student Ledger",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Fee Receivings",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Transport Fee Details",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Fee and Expence Comparison",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Monthly Fee Comparison",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Fee Bills List",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Fee Bills Print",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Outstanding Balance",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Bills/Receivings",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Month Wise Outstanding Report",
          icon: <CgShapeCircle size={size2} />,
        },
      ],
    },
    {
      name: "Examinations",
      dicon: <BsCaretDownFill style={{ marginTop: 3 }} size={size3} />,
      icon: <IoIosBook size={size} />,
      submenu: [
        {
          path: "",
          name: "Result Entry",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Old Results",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Add Examination",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Add Exam Subjects",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Exam Mark Sheet",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Promote Class",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Class Went Option",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Previuos Exams",
          icon: <CgShapeCircle size={size2} />,
        },
      ],
    },
    {
      name: "Staff Records",
      dicon: <BsCaretDownFill style={{ marginTop: 3 }} size={size3} />,
      icon: <FaUsers size={size} />,
      submenu: [
        {
          path: "",
          name: "Staff Profile",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Staff Attendance",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Generate Staff Salary",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Employee Report",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Employee Phone",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Absent Staff",
          icon: <CgShapeCircle size={size2} />,
        },
      ],
    },
    {
      name: "Finance",
      dicon: <BsCaretDownFill style={{ marginTop: 3 }} size={size3} />,
      icon: <FaCoins size={size} />,
      submenu: [
        {
          path: "",
          name: "Add/Edit Account",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Cash Book",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Payment Voucher",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Receipt Voucher",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Journal Voucher",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Chart of Accounts",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Ledger Details",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Account Balances",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Expense Report",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Trial Balance",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Profit & Loss",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Balance Sheet",
          icon: <CgShapeCircle size={size2} />,
        },
      ],
    },
    {
      name: "Settings",
      dicon: <BsCaretDownFill style={{ marginTop: 3 }} size={size3} />,
      icon: <IoMdSettings size={size} />,
      submenu: [
        {
          path: "",
          name: "Add/Edit Classes",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Add/Edit Areas",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Settings",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Add/Edit Vehicles",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Import Excel",
          icon: <CgShapeCircle size={size2} />,
        },
      ],
    },
    {
      name: "Utilities",
      dicon: <BsCaretDownFill style={{ marginTop: 3 }} size={size3} />,
      icon: <FaTools size={size} />,
      submenu: [
        {
          path: "",
          name: "Users",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Change Password",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "User Rights",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "BackUp Data",
          icon: <CgShapeCircle size={size2} />,
        },
      ],
    },
    {
      name: "Messaging",
      dicon: <BsCaretDownFill style={{ marginTop: 3 }} size={size3} />,
      icon: <BiSolidMessageRoundedDetail size={size} />,
      submenu: [
        {
          path: "",
          name: "Write SMS",
          icon: <CgShapeCircle size={size2} />,
        },
        {
          path: "",
          name: "Message Server Settings",
          icon: <CgShapeCircle size={size2} />,
        },
      ],
    },
  ];
  return (
    <>
      <div className="navbar">
        <div
          style={{ display: isOpen ? "flex" : "none" }}
          className="h-12 w-[11%] flex items-center justify-center bg-white"
        >
          <img src={imglogo} alt="" className="h-12 w-[96%] animate-pulse" />
        </div>
        <div
          onClick={toggle}
          style={{ backgroundColor: isOpen ? "white" : "#27A558" }}
          className="bars h-12 w-12 flex justify-center items-center"
        >
          <FaBars style={{ color: isOpen ? "#04213F" : "white" }} />
        </div>
        <div className="h-12 w-[9rem] flex justify-center items-center">
          <h2 className="middle-txt font-popins">SafeCare</h2>
        </div>
        <div
          className="w-[6rem] h-10 absolute end-0 transition ease-out duration-700 rounded-lg hover:bg-primary-blue mr-4 flex items-center justify-center"
          onClick={() => navigate("/")}
        >
          <BiLogOutCircle className="rotate-90" color="white" size={20} />
          <h3 className="text-white font-popins text-md font-medium">Logout</h3>
        </div>
      </div>
      <div className="cont">
        <div style={{ width: isOpen ? "250px" : "55px" }} className="sidebar ">
          {menuItems.map((menuItems, index) => (
            <div key={index}>
              {/* Main Menu Item */}
              <NavLink to={menuItems.path}>
                <div
                  style={{ width: isOpen ? "215px" : "55px" }}
                  onClick={() => submenu(index)}
                  className={` flex mt-2 h-10 hover:bg-primary-green items-center ${
                    hover ? menuOpen : ""
                  }`}
                >
                  <div className="flex justify-center items-center ml-2 icon h-6 w-8">
                    {menuItems.icon}
                  </div>

                  <div
                    style={{ display: isOpen ? "" : "none" }}
                    className="line-clamp-1 h-6 w-[10rem] ml-1 "
                  >
                    {menuItems.name}
                  </div>
                  <div
                    style={{ display: isOpen ? "" : "none" }}
                    className="h-6 w-6 mr-[8px] flex justify-center items-center"
                  >
                    {menuItems.dicon}
                  </div>
                </div>
              </NavLink>
              {/* Sub-Menu Items */}
              {menuItems.submenu && menuOpen[index] && (
                <div
                  className="bg-primary-green"
                  style={{ display: isOpen ? "" : "none" }}
                >
                  {menuItems.submenu.map((submenu, subIndex) => (
                    <NavLink
                      to={submenu.path}
                      key={subIndex}
                      className="sub-link font-popins line-clamp-1"
                      onClick={closeSidebar}
                    >
                      <div className="sub-icon">{submenu.icon}</div>
                      <div className="sub-txt font-popins text-sm line-clamp-1">
                        {submenu.name}
                      </div>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <main closeSidebar={closeSidebar} className="bg-[#E2E8F0]">
          {children}
        </main>
      </div>
    </>
  );
};

export default SideBar;
