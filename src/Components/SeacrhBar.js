import React from "react";
import { ImSearch } from "react-icons/im";
const SeacrhBar = () => {
  return (
    <div className="h-8 w-[70%] pl-1 bg-white rounded-[0.25rem] flex items-center">
      <input className="h-[90%] font-popins px-1 text-cente w-[90%] outline-none" />
      <ImSearch
        className="h-8 p-2 bg-primary-blue rounded-s-[0.25rem]"
        color="white"
        size={30}
      />
    </div>
  );
};

export default SeacrhBar;
