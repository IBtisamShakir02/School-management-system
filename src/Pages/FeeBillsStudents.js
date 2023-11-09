import React from "react";
import DropDown from "../Components/DropDown";
const FeeBillsStudents = () => {
  return (
    <>
      <div className="MAIN-DIV bg-[#E2E8F0] flex flex-col items-center h-screen">
        {/* HEADER DIV */}
        <div className="HEADER-DIV h-[3.5rem] w-[100%] pt-[1rem] pl-[1rem] shadow-md bg-primary-blue shadow-slate-500 mix-blend-normal">
          <h2 className="font-popins text-[18px] text-white">
            Fee Bill For Students
          </h2>
        </div>
        {/* FIRST DIV */}
        <div className="FIELDS-MAIN-DIV columns-2 mt-4 h-[15rem] w-[98%]">
          {/* FOR LEFT DIV */}
          <div className="FIELDS-COL-1 h-[15rem] p-1 flex items-center justify-center pt-5 bg-primary-blue rounded-lg ">
            <div className="h-[14.5rem] w-[25%] p-1">
              <div className="h-[2rem] w-[100%] px-1 mt-1 flex items-center justify-start">
                <h3 className="font-popins text-white">Registration No:</h3>
              </div>
              <div className="h-[2rem] w-[100%] mt-2 px-1 flex items-center justify-start">
                <h3 className="font-popins text-white">From Month:</h3>
              </div>
              <div className="h-[2rem] w-[100%] mt-2 px-1 flex items-center justify-start">
                <h3 className="font-popins text-white">To Month:</h3>
              </div>
              <div className="h-[2rem] w-[100%] mt-2 px-1 flex items-center justify-start">
                <h3 className="font-popins text-white">Student Name:</h3>
              </div>
              <div className="h-[2rem] w-[100%] mt-2 px-1 flex items-center justify-start">
                <h3 className="font-popins text-white">Father Name:</h3>
              </div>
            </div>
            <div className="h-[14.5rem] w-[70%] p-1 ">
              <div className="h-[2rem] mt-1 w-[100%]">
                <input
                  placeholder="Registration Number"
                  className="h-[2rem] w-[14.5rem] text-white placeholder:text-slate-600 justify-center font-popins bg-transparent px-2 outline-none ml-1"
                />
              </div>
              <div className="h-[2rem] w-[100%] mt-2 flex">
                <DropDown
                  lable="Select Month"
                  txt="text-white"
                  bordr="border-none"
                  bgClr="bg-transparent"
                  optionBg="bg-primary-blue"
                  categories={[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ]}
                />
                <input
                  placeholder="Year"
                  inputMode="numeric"
                  className="h-[2rem] w-[14.5rem] text-white placeholder:text-slate-600 justify-center font-popins bg-transparent px-2 outline-none ml-1"
                />
              </div>
              <div className="h-[2rem] w-[100%] mt-2 flex">
                <DropDown
                  lable="Select Month"
                  txt="text-white"
                  bordr="border-none"
                  bgClr="bg-primary-blue"
                  optionBg="bg-primary-blue"
                  categories={[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ]}
                />
                <input
                  placeholder="Year"
                  inputMode="numeric"
                  className="h-[2rem] w-[14.5rem] text-white placeholder:text-slate-600 justify-center font-popins bg-transparent px-2 outline-none ml-1"
                />
              </div>
              <div className="h-[2rem] mt-2 w-[100%]">
                <input
                  placeholder="Student Name"
                  className="h-[2rem] w-[14.5rem] text-white placeholder:text-slate-600 justify-center font-popins bg-transparent px-2 outline-none ml-1"
                />
              </div>
              <div className="h-[2rem] mt-2 w-[100%]">
                <input
                  placeholder="Father Name"
                  className="h-[2rem] w-[14.5rem] text-white placeholder:text-slate-600 justify-center font-popins bg-transparent px-2 outline-none ml-1"
                />
              </div>
            </div>
          </div>
          {/* FOR RIGHT DIV */}
          <div className="FIELDS-COL-2 h-[15rem] p-1 flex items-center justify-center pt-5 bg-primary-blue rounded-lg ">
            <div className="h-[14.5rem] w-[25%] p-1">
              <div className="h-[2rem] w-[100%] px-1 mt-1 flex items-center justify-start">
                <h3 className="font-popins text-white">Last Bill:</h3>
              </div>
              <div className="h-[2rem] w-[100%] mt-2 px-1 flex items-center justify-start">
                <h3 className="font-popins text-white">Bill Date:</h3>
              </div>
              <div className="h-[2rem] w-[100%] mt-2 px-1 flex items-center justify-start">
                <h3 className="font-popins text-white">Due Date:</h3>
              </div>
              <div className="h-[2rem] w-[100%] mt-2 px-1 flex items-center justify-start">
                <h3 className="font-popins text-white">Class:</h3>
              </div>
              <div className="h-[2rem] w-[100%] mt-2 px-1 flex items-center justify-start">
                <h3 className="font-popins text-white">Father Name:</h3>
              </div>
            </div>
            <div className="h-[14.5rem] w-[70%] p-1 ">
              <div className="h-[2rem] mt-1 w-[100%]">
                <input
                  placeholder="Last Bill"
                  className="h-[2rem] w-[14.5rem] text-white placeholder:text-slate-600 justify-center font-popins bg-transparent px-2 outline-none ml-1"
                />
              </div>
              <div className="h-[2rem] w-[100%] mt-2 flex">
                <input
                  type="date"
                  className="h-[2rem] w-[14.5rem] text-white justify-center font-popins bg-transparent px-2 outline-none ml-1"
                />
              </div>
              <div className="h-[2rem] w-[100%] mt-2 flex">
                <input
                  type="date"
                  className="h-[2rem] w-[14.5rem] text-white justify-center font-popins bg-transparent px-2 outline-none ml-1"
                />
              </div>
              <div className="h-[2rem] mt-2 w-[100%]">
                <input
                  placeholder="Class"
                  className="h-[2rem] w-[14.5rem] text-white placeholder:text-slate-600 justify-center font-popins bg-transparent px-2 outline-none ml-1"
                />
              </div>
              <div className="h-[2rem] mt-2 w-[100%]">
                <input
                  placeholder="Father Name"
                  className="h-[2rem] w-[14.5rem] text-white placeholder:text-slate-600 justify-center font-popins bg-transparent px-2 outline-none ml-1"
                />
              </div>
            </div>
          </div>
        </div>
        {/* FOR TABLE */}
        <div className="h-10 w-[98%] grid grid-cols-4 text-white font-popins bg-primary-green rounded-lg mt-5">
          <div className="grid place-content-center">
            <p>Description</p>
          </div>
          <div className="grid place-content-center">
            {" "}
            <p>Amount</p>
          </div>
          <div className="grid place-content-center">
            {" "}
            <p>Quantity</p>
          </div>
          <div className="grid place-content-center">
            {" "}
            <p>Total</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeeBillsStudents;
