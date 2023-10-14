import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Card = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={()=>navigate(props.path)}
        className="h-[8rem] max-w-[14rem] mb-3 ml-2 mt-1 transition duration-300 hover:bg-sky-700 rounded-[8px] bg-primary-green shadow-lg shadow-slate-500 bg-blend-normal	 "
      >
        <div className="h-[95px] w-[100%]  mt-1 flex flex-row justify-evenly rounded-[8px]">
          <div className="h-[80px] w-[80px] overflow-hidden rounded-[20px] p-1 ml-1 mt-1">
            <img className="opacity-82 h-[100%]" src={props.imag} alt="" />
          </div>
          <div className="h-[93px] w-[130px]  rounded-[8px] bgwh p-1 ">
            <h3 className="font-popins line-clamp-2 text-lg  mt-2  text-white ">
              {props.txt}
            </h3>
          </div>
        </div>
        <div className="h-[33px] w-[100%] bg-primary-blue flex  flex-row items-center p-1 rounded-[8px]">
          <BsArrowRightShort className="mt-[2px]" size={20} color="white" />
          <h4 className="font-popins text-xs text-white">View</h4>
        </div>
      </div>
    </>
  );
};

export default Card;
