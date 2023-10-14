import React from "react";
import Button from "../Components/Button";
import DropDown from "../Components/DropDown";
import SeacrhBar from "../Components/SeacrhBar";
import { FaTrashAlt, FaEdit, FaPrint } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaSortAmountDownAlt, FaSort, FaSortAlphaUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const StudentList = () => {
  const [users, setUsers] = useState([]);
  const [sortedStudents, setSortedStudents] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  const [sortedClass, setSortedClass] = useState([]);
  const [sortClassOrder, setSortClassOrder] = useState("asc");

  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 10;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = users.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(users.length / recordPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  useEffect(() => {
    fetch("http://192.168.10.14:8000/api/getAllUser")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setSortedStudents(data);
        setSortedClass(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDeleteUser = (id) => {
    const userToDelete = users.find((user) => user.id === id);

    if (userToDelete) {
      const userName = userToDelete.Student_Name;
      const registrationNo = userToDelete.Registration_No;

      fetch(`http://192.168.10.14:8000/api/deleteUser/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          const updatedUsers = users.filter((user) => user.id !== id);
          setUsers(updatedUsers);
          setSortedStudents(updatedUsers);
          alert(
            `Delete Student: ${userName}, Registration No: ${registrationNo}`
          );
        })
        .catch((error) => console.error("Error deleting user:", error));
    }
  };
  const handleSortReg = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    const sorted = users.slice().sort((a, b) => {
      if (sortOrder === "asc") {
        return a.Registration_No - b.Registration_No;
      } else {
        return b.Registration_No - a.Registration_No;
      }
    });
    setSortOrder(newSortOrder);
    setUsers(sorted);
    console.log(sortedStudents);
  };
  const handleSortClass = () => {
    const newSortClass = sortClassOrder === "asc" ? "desc" : "asc";
    const sortedC = users.slice().sort((a, b) => {
      if (sortClassOrder === "asc") {
        return a.Class - b.Class;
      } else {
        return b.Class - a.Class;
      }
    });
    setSortClassOrder(newSortClass);
    setUsers(sortedC);
    console.log(sortedClass);
  };
  const prePage = () => {
    if (currentPage !== 1){
      setCurrentPage(currentPage-1)
    }

  }
  const changeCPage = (id) => {
    setCurrentPage(id)
  }
  const nextPage = () => {
    if (currentPage !== nPage){
      setCurrentPage(currentPage+1)
    }
  }
  return (
    <>
      <div className="bg-[#E2E8F0] flex flex-col items-center h-screen max-w-[100%]">
        <div className="h-[3.5rem] w-[100%] pt-[1rem] pl-[1rem] shadow-md bg-primary-blue shadow-slate-500 mix-blend-normal">
          <h2 className="font-popins text-[18px] text-white">Students</h2>
        </div>
        <div className=" w-[95%] h-[6rem] border-b grid grid-flow-row-dense grid-cols-3 grid-rows-3">
          <div className="h-[6rem] flex  items-center justify-evenly w-[90%]">
            <Button
              //   go={}
              color="#27A558"
              title="Add Student"
              py="py-[0.5rem]"
              px="px-5"
            />
            <Button
              //   go={}
              py="py-[0.5rem]"
              px="px-5"
              color="#27A558"
              title="Excel Import"
            />
          </div>
          <div className="h-[6rem] w-[90%] flex">
            <div className="h-[6rem] w-[25%] flex items-center justify-center">
              <h3 className="font-popins text-black">Catagory:</h3>
            </div>
            <div className="w-[75%] flex items-center pl-2">
              <DropDown
                lable="Select Students"
                categories={[
                  "All Students",
                  "Present Students",
                  "Left students",
                ]}
              />
            </div>
          </div>
          <div className="h-[6rem] w-[90%] flex items-center justify-evenly ">
            <div className="h-[6rem] w-[15%] flex items-center justify-center">
              <h3 className="font-popins text-black">Class:</h3>
            </div>
            <div className="h-[6rem] flex items-center justify-center">
              <DropDown
                lable="Select Class"
                categories={[
                  "All Classes",
                  "Play Group",
                  "Nursery",
                  "KG",
                  "One",
                  "Two",
                  "Three",
                  "Four",
                  "Five",
                  "Six",
                  "Seven",
                  "Eight",
                  "Nine",
                  "Ten",
                ]}
              />
            </div>
            <div className="h-[6rem] w-[35%] flex items-center justify-center">
              <Button
                title="Excel Export"
                color="#27A558"
                py="py-[0.5rem]"
                px="px-5"
              />
            </div>
          </div>
        </div>
        <div className="w-[95%] h-[4rem] rounded-lg border-b flex items-center justify-between bg-primary-blue">
          <div className="w-[15%] h-[6rem] flex justify-center">
            <div className="h-[6rem] w-[30%] flex items-center justify-center">
              <h3 className="font-popins text-white">Show</h3>
            </div>
            <div className="h-[6rem] w-[39%] flex items-center justify-center">
              <DropDown lable="0" categories={["10", "25", "50"]} />
            </div>
            <div className="h-[6rem] w-[30%] flex items-center justify-center">
              <h3 className="font-popins text-white">Items</h3>
            </div>
          </div>
          <div className="w-[20%] flex justify-center items-center h-[6rem]">
            <h3 className="font-popins text-white mr-2">Search:</h3>
            <SeacrhBar />
          </div>
        </div>
        <div className="w-[95%] h-[2.5rem] mt-4 p-1 rounded-lg border-b flex items-center bg-primary-green">
          <div className="h-[2rem] w-[12%] rounded-lg p-1">
            <h3 className="text-white font-popins">Action</h3>
          </div>
          <div className="h-[2rem] w-[6%] flex items-center justify-evenly rounded-lg">
            <FaSortAmountDownAlt className="text-white" />
            <h3 className="text-white font-popins">S.No</h3>
          </div>
          <div
            onClick={handleSortReg}
            className="h-[2rem] hover:bg-primary-submenu duration-100 delay-100 flex items-center justify-evenly w-[6%] rounded-lg "
          >
            <FaSort className="text-white" />
            <h3 className="text-white font-popins">Reg.No</h3>
          </div>
          <div className="h-[2rem] w-[15%] flex items-center justify-center rounded-lg">
            <FaSortAlphaUp className="text-white mr-[0.30rem]" />
            <h3 className="text-white font-popins">Student Name</h3>
          </div>
          <div className="h-[2rem] w-[15%] flex items-center justify-center rounded-lg">
            <FaSortAlphaUp className="text-white mr-[0.30rem]" />
            <h3 className="text-white font-popins">Father Name</h3>
          </div>
          <div className="h-[2rem] w-[16%] flex items-center justify-center rounded-lg">
            <FaSortAlphaUp className="text-white mr-[0.30rem]" />
            <h3 className="text-white font-popins">Contact Info</h3>
          </div>
          <div
            onClick={handleSortClass}
            className="h-[2rem] w-[10%] hover:bg-primary-submenu duration-100 delay-100 flex items-center justify-center rounded-lg"
          >
            <FaSort className="text-white mr-[0.30rem]" />
            <h3 className="text-white font-popins">Class</h3>
          </div>
          <div className="h-[2rem] w-[10%] rounded-lg flex items-center justify-center">
            <FaSort className="text-white mr-[0.30rem]" />
            <h3 className="text-white font-popins">Net Fee</h3>
          </div>
          <div className="h-[2rem] w-[10%] rounded-lg flex items-center justify-center">
            <FaSort className="text-white mr-[0.30rem]" />
            <h3 className="text-white font-popins line-clamp-1">Transport</h3>
          </div>
        </div>
        <div className="h-max mb-8 w-[95%] flex rounded-lg border border-primary-green">
          <div className="container">
            <table className="min-w-full bg-white">
              <tbody>
                {records.map((user, id) => (
                  <tr
                    className="rounded-lg border-b flex justify-center mx-1"
                    key={user.id}
                  >
                    <td className="h-[1.5rem] w-[12%] flex items-center justify-around rounded-lg">
                      <div className="h-[1.5rem] w-[20%] rounded-lg flex items-center justify-center">
                        <FaEdit color="skyblue" size={18} />
                      </div>
                      <div className="h-[1.5rem] w-[20%] rounded-lg flex items-center justify-center">
                        <FaTrashAlt
                          color="#F67280"
                          onClick={() => handleDeleteUser(user.id)}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                      <div className="h-[1.5rem] w-[20%] rounded-lg flex items-center justify-center">
                        <FaPrint color="lightgreen" />
                      </div>
                    </td>
                    <td className="h-[1.5rem] w-[6%] text-center rounded-lg font-popins">
                      {user.id}
                    </td>
                    <td className="h-[1.5rem] w-[6%] text-center rounded-lg font-popins">
                      {user.Registration_No}
                    </td>
                    <td className="h-[1.5rem] w-[15%] text-center rounded-lg ont-popins">
                      {user.Student_Name}
                    </td>
                    <td className="h-[1.5rem] w-[15%] text-center rounded-lg font-popins">
                      {user.contactInfo.Father_Name}
                    </td>
                    <td className="h-[1.5rem] w-[16%] text-center rounded-lg font-popins">
                      {user.contactInfo.Father_Phone}
                    </td>
                    <td className="h-[1.5rem] w-[10%] text-center rounded-lg font-popins">
                      {user.Class}
                    </td>
                    <td className="h-[1.5rem] w-[10%] text-center rounded-lg font-popins">
                      {user.feeInfo.Net_Fee}
                    </td>
                    <td className="h-[1.5rem] w-[10%] text-center rounded-lg font-popins"></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <nav>
              <ul className="h-10 w-full flex items-center justify-end bg-slate-400">
                <li className="h-8 w-14 flex items-center justify-center bg-slate-800">
                  <a href="#" onClick={prePage}>
                    Prev
                  </a>
                </li>
                {numbers.map((n, i) => (
                  <li className={`h-10 w-10 flex items-center justify-evenly bg-red-400 ${currentPage === n ? "active":""}`} key={i}>
                    <a href="#" onClick={()=>changeCPage(n)} className=" bg-slate-800">
                      {n}
                    </a>
                  </li>
                ))}
                 <li className="h-8 w-14 flex items-center justify-center bg-slate-800">
                  <a href="#" onClick={nextPage}>
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );

};

export default StudentList;
