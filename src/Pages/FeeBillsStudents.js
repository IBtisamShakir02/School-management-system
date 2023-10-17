import React from "react";

const FeeBillsStudents = () => {
  return (
    <>
      <div className="MAIN-DIV bg-[#E2E8F0] flex flex-col items-center h-screen max-w-[100%]">
        <div className="HEADER-DIV h-[3.5rem] w-[100%] pt-[1rem] pl-[1rem] shadow-md bg-primary-blue shadow-slate-500 mix-blend-normal">
          <h2 className="font-popins text-[18px] text-white">
            Fee Bill For Students
          </h2>
        </div>
        <div className="FIELDS-MAIN-DIV columns-2 mt-4 h-[25rem] w-[98%]">
          <div className="FIELDS-COL-1 h-[25rem]  bg-blue-700"></div>
          <div className="FIELDS-COL-2 h-[25rem] bg-green-700"></div>
        </div>
      </div>
    </>
  );
};

export default FeeBillsStudents;
