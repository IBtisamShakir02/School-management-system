// <=========IMPORTS========>
import React from "react";
import "../Auths/SignUp.css";
import { useState } from "react";
import InputField from "../../Components/InputField";
import Button from "../../Components/Button";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const SignUp = (props) => {
  // <====DECLARATIONS=====>
  const navigate = useNavigate();
  const url = "http://localhost:6000/api/signup";
  // <======STATES======>
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  // <======FUNCTIONS=====>
  const goToSignIn = () => {
    const dta = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
    };
    console.log("dta", dta);
    if (
      dta.name !== "" &&
      dta.email !== "" &&
      dta.phone !== "" &&
      dta.password !== ""
    ) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(dta),
      }).then((res) => {
        console.log("data", res);
      });
      navigate("/");
    } else {
      alert("Please Enter Data");
    }
  };
  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };
  // <=======API DATA CHECK======>
  // useEffect(() => {
  //   const url = "http://localhost:4000/api/userData";
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data=>{
  //       console.log('Data',data)
  //     }).catch(e=> {
  //       console.log("Error", e);
  //     });
  // }, []);
  // <====ELEMENTS===>
  return (
    <>
      <div className="background">
        <div className="innerDiv">
          <div className="outerBox">
            <h2 className="txt font-popins">{props.lable}</h2>
            <div className="Div">
              <InputField
                ch={(e) => handleChange(e)}
                Id="name"
                vl={data.name}
                lable="Full-Name:"
                type="text"
              />
              <MdDriveFileRenameOutline
                className="icon"
                color="white"
                size={20}
              />
            </div>
            <div className="Div">
              <InputField
                ch={(e) => handleChange(e)}
                Id="email"
                vl={data.email}
                lable="E-Mail:"
                type="email"
              />
              <MdEmail className="icon" color="white" size={18} />
            </div>
            <div className="Div">
              <InputField
                ch={(e) => handleChange(e)}
                Id="phone"
                vl={data.phnum}
                lable="Phone:"
              />
              <MdPhone className="icon" color="white" size={18} />
            </div>
            <div className="Div">
              <InputField
                ch={(e) => handleChange(e)}
                Id="password"
                vl={data.password}
                lable="Password:"
                type="password"
              />
              <MdLock className="icon" color="white" size={18} />
            </div>
            <div className="py-7 px-24 mt-3">
              <Button
                go={() => goToSignIn()}
                color="rgb(62, 96, 207)"
                title="Sign-Up"
                py="py-[0.5rem]"
                px="px-5"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
