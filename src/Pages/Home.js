import React from "react";
import "./Home.css";
import Card from "../Components/Card";
function Home() {
  return (
    <>
      <div className="outer-container bg-slate-300">
        <div className="header-container">
          <h2 className="header-txt text-primary-green">DashBoard</h2>
        </div>
        <div className="body-container mt-5">
          <div className=" flex flex-wrap p-6 ml-10  mx-4  border-2 border-solid border-lightgrey rounded-xl w-[95%]  items-center justify-center ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
