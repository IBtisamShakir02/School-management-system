import React, { useState, useEffect } from "react";

import { FaSearch } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { BsCashStack } from "react-icons/bs";
import { SiGoogleclassroom, SiNamecheap } from "react-icons/si";
import {
  MdCallMissedOutgoing,
  MdOutlineFamilyRestroom,
  MdOutlinePersonOutline,
} from "react-icons/md";
import { TbHealthRecognition, TbGenderDemiboy } from "react-icons/tb";
import {
  AiOutlineInteraction,
  AiOutlineHome,
  AiOutlineNumber,
  AiOutlineUser,
  AiOutlineInfoCircle,
  AiOutlineFlag,
} from "react-icons/ai";
import { GiSecurityGate } from "react-icons/gi";
import { PiUmbrellaBold } from "react-icons/pi";
import { BiBookAdd, BiMessageAltError } from "react-icons/bi";
import { LuSchool } from "react-icons/lu";
import { ImMobile2 } from "react-icons/im";
import { RiLuggageDepositLine } from "react-icons/ri";

function AdmissionFromComponent() {
  const [selectedImage, setSelectedImage] = useState(
    "https://mysms.zsoft.pk/profile.jpg"
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [check, setcheck] = useState(false);

  function handleCheck() {
    setcheck(!check);
  }

  const [formData, setFormData] = useState({
    // admission from

    Registration_No: "",
    Student_Name: "",
    Admission_Date: "",
    Class_Roll_No: "",
    Date_of_Birth: "",
    Class: "",
    Age: "",
    Gender: "",
    Left_School: "",
    Reason_to_Leave: "",
    // filename:'',

    // PersonalInfo form
    Admission_to_Class: "",
    Home_Address: "",
    Religion: "",
    Nationality: "",
    Health_issues: "",
    Hobbies_Interest: "",
    L_school_Attended: "",
    Leaving_reason: "",
    Form_B_No: "",
    Photographs: "",
    Birth_certificate: "",
    School_Leaving_Certificate: "",

    //   contactInfo form

    Father_Name: "",
    Father_CNIC: "",
    Father_Phone: "",
    Father_Occupation: "",
    SMS_Mobile: "",
    Residence_Phone: "",

    // feeInfo form

    Monthly_Fee: "",
    Net_Fee: "",
    Discount: "",
    Select_Area: "",
    Security_DEP: "",
    Security_Funded: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    console.log(formData); // Log the updated state when it changes
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the data to the backend using the fetch method
    fetch("192.168.10.9:8000/api/studentAdmission", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response from the server
      });
  };

  return (
    <>
      <div className="h-[3.5rem] w-[100%] pt-[1rem] pl-[1rem] shadow-md bg-primary-blue shadow-slate-500 mix-blend-normal">
        <h2 className="font-popins  text-[18px] text-white">AdmissionForm</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="main-div border mx-auto p-6 w-11/12 shadow-lg border-black-400 my-2">
          {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! AdmissionForm div  !!!!!!!!!!!!!!!!!!! */}

          <div className="AdmissionForm-div flex justify-center gap-80 py-4">
            <div className="left space-y-6">
              <div>
                <div className="flex p-2 gap-2 ">
                  <BiBookAdd size={35} className="text-primary-blue   " />

                  <input
                    placeholder="Reg No "
                    className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                    type="text"
                    id="name"
                    name="Registration_No"
                    value={formData.Registration_No}
                    onChange={(e) => handleChange(e)}
                  />
                  <FaSearch
                    className="bg-primary-blue text-white px-2 rounded mt-1  "
                    size={30}
                  />
                </div>

                <h3 className=" text-sm text-red-500 ml-4 w-4/5 text-center px-2 py-1  animate-pulse rounded-md">
                  Reg# will be auto generated!
                </h3>
              </div>

              <div className="flex p-1 gap-2 ">
                <MdOutlinePersonOutline
                  size={35}
                  className="text-primary-blue   "
                />
                <input
                  placeholder="Student Name"
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 bg-[#E2E8F0] placeholder-black-400 outline-none text-xl"
                  type="text"
                  id="name"
                  name="Student_Name"
                  value={formData.Student_Name}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="flex p-2 gap-2 ">
                <MdOutlineDateRange
                  size={35}
                  className="text-primary-blue   "
                />
                <input
                  placeholder="Admission Date"
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                  type="text"
                  id="Admission_Date"
                  name="Admission_Date"
                  value={formData.Admission_Date}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="flex p-2 gap-2 ">
                <AiOutlineNumber size={35} className="text-primary-blue   " />
                <input
                  placeholder="Class Roll No"
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                  type="text"
                  id="Class_Roll_No"
                  name="Class_Roll_No"
                  value={formData.Class_Roll_No}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="flex p-2 gap-2 ">
                <MdOutlineDateRange
                  size={35}
                  className="text-primary-blue   "
                />
                <input
                  placeholder="Date of Birth"
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                  type="text"
                  id="Date_of_Birth"
                  name="Date_of_Birth"
                  value={formData.Date_of_Birth}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="flex p-2 gap-2 ">
                <SiGoogleclassroom size={35} className="text-primary-blue   " />
                <input
                  placeholder="Class"
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                  type="text"
                  id="Class"
                  name="Class"
                  value={formData.Class}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="flex p-2 gap-2 ">
                <BiMessageAltError size={35} className="text-primary-blue   " />
                <input
                  placeholder="Age"
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                  type="text"
                  id="Age"
                  name="Age"
                  value={formData.Age}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div className="right space-y-6">
              <div className=" mx-12 px-3  w-52">
                <div className="w-36   h-36  shadow-gray-500">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="max-w-full min-h-full object-cover object-center rounded justify-center "
                  />
                </div>
                <input
                  className="w-52 my-1  "
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>

              <div className="flex p-2 gap-2 ">
                <TbGenderDemiboy size={35} className="text-primary-blue   " />
                <input
                  placeholder="Gender"
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                  type="text"
                  id="Gender"
                  name="Gender"
                  value={formData.Gender}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="flex p-2 gap-2 ">
                <MdCallMissedOutgoing
                  size={35}
                  className="text-primary-blue   "
                />
                <input
                  placeholder=" Left School"
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                  type="text"
                  id="Left_School"
                  name="Left_School"
                  value={formData.Left_School}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="flex p-2 gap-2 ">
                <MdCallMissedOutgoing
                  size={35}
                  className="text-primary-blue   "
                />
                <input
                  placeholder=" Reason to Leave"
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                  type="text"
                  id="Reason_to_Leave"
                  name="Reason_to_Leave"
                  value={formData.Reason_to_Leave}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>

          {/* !!!!!!!!!!!!!!!!!!!!!!!! PersonalInfo div !!!!!!!!!!!!!!!!!!! */}

          <div className="flex my-12 gap-2">
            <AiOutlineInfoCircle className="mt-1 text-3xl text-primary-blue  " />
            <h3 className="text-2xl font-semibold">Personal Info</h3>
          </div>

          <div className="PersonalInfo-div flex justify-center gap-96 py-4">
            <div className="left space-y-6">
              <div className="flex p-2 gap-2 ">
                <LuSchool size={35} className="text-primary-blue   " />
                <input
                  placeholder="Admission to class"
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                  type="text"
                  id="Admission_to_Class"
                  name="Admission_to_Class"
                  value={formData.Admission_to_Class}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="flex p-2 gap-2 ">
                <AiOutlineHome size={35} className="text-primary-blue   " />
                <input
                  placeholder="Home Address"
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                  type="text"
                  id="Home_Address"
                  name="Home_Address"
                  value={formData.Home_Address}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="flex p-2 gap-2 ">
                <SiNamecheap size={35} className="text-primary-blue   " />
                <input
                  placeholder="Religion"
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                  type="text"
                  id="Religion"
                  name="Religion"
                  value={formData.Religion}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="flex p-2 gap-2 ">
                <AiOutlineFlag size={35} className="text-primary-blue   " />
                <input
                  placeholder="Nationality"
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                  type="text"
                  id="Nationality"
                  name="Nationality"
                  value={formData.Nationality}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="flex p-2 gap-2 ">
                <TbHealthRecognition
                  size={35}
                  className="text-primary-blue   "
                />
                <input
                  placeholder="Health issues"
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                  type="text"
                  id="Health_issues"
                  name="Health_issues"
                  value={formData.Health_issues}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="flex p-2 gap-2 ">
                <AiOutlineInteraction
                  size={35}
                  className="text-primary-blue   "
                />
                <input
                  placeholder="Hobbies/Interest"
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                  type="text"
                  id="Hobbies_Interest"
                  name="Hobbies_Interest"
                  value={formData.Hobbies_Interest}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="flex p-2 gap-2 ">
                <AiOutlineNumber size={35} className="text-primary-blue   " />
                <input
                  placeholder="Form B No."
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                  type="text"
                  id="Form_B_No"
                  name="Form_B_No"
                  value={formData.Form_B_No}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div className="right space-y-6 mt-1">
              <div className="text-xl text-primary-blue font-semibold px-4">
                <label>Photograph</label>
                <input
                  type="checkbox"
                  className="mx-4 "
                  value={formData.Photographs}
                  name="Photographs"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="text-xl text-primary-blue font-semibold px-4">
                <label>Form B/Birth Certificate</label>
                <input
                  type="checkbox"
                  className="mx-4 "
                  value={formData.Form_B_No}
                  name="Form_B_No"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="text-xl text-primary-blue font-semibold px-4">
                <label>School Leaving Certificate</label>
                <input
                  type="checkbox"
                  className="mx-4 "
                  value={formData.School_Leaving_Certificate}
                  name="School_Leaving_certificate"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>

          {/* !!!!!!!!!!!!!!!!!!!! contactInfo div !!!!!!!!!!!!!!!!!!!!!!! */}

          <div className="flex my-12 gap-2">
            <AiOutlineInfoCircle className="mt-1 text-3xl text-primary-blue  " />
            <h3 className="text-2xl font-semibold">Contact Info</h3>
          </div>

          <div className="ContactInfo-div flex justify-center gap-80 py-4">
            <div className="left space-y-6">
              <div className="flex p-2 gap-2 ">
                <MdOutlineFamilyRestroom
                  size={35}
                  className="text-primary-blue   "
                />

                <input
                  placeholder="Father Name"
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                  type="text"
                  id="Father_Name"
                  name="Father_Name"
                  value={formData.Father_Name}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="flex p-2 gap-2 ">
                <AiOutlineNumber size={35} className="text-primary-blue   " />
                <input
                  placeholder="Father CNIC"
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                  type="text"
                  id="Father_CNIC"
                  name="Father_CNIC"
                  value={formData.Father_CNIC}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="flex p-2 gap-2 ">
                <AiOutlineNumber size={35} className="text-primary-blue   " />
                <input
                  placeholder="Father Phone"
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                  type="text"
                  id="Father_Phone"
                  name="Father_Phone"
                  value={formData.Father_Phone}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div className="right space-y-6 mt-1">
              <div className="flex p-2 gap-2 ">
                <PiUmbrellaBold size={35} className="text-primary-blue   " />
                <input
                  placeholder="Father Occupation"
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                  type="text"
                  id="Father_Occupation"
                  name="Father_Occupation"
                  value={formData.Father_Occupation}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="flex p-2 gap-2 ">
                <ImMobile2 size={35} className="text-primary-blue   " />
                <input
                  placeholder="SMS Mobile"
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                  type="text"
                  id="SMS_Mobile"
                  name="SMS_Mobile"
                  value={formData.SMS_Mobile}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="flex p-2 gap-2 ">
                <ImMobile2 size={35} className="text-primary-blue   " />
                <input
                  placeholder="Residence Phone"
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                  type="text"
                  id="Residence_Phone"
                  name="Residence_Phone"
                  value={formData.Residence_Phone}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>

          {/* !!!!!!!!!!!!!!!!!!!! feeInfo div !!!!!!!!!!!!!!!!!!!!!!! */}

          <div className="flex my-12 gap-2">
            <AiOutlineInfoCircle className="mt-1 text-3xl text-primary-blue  " />
            <h3 className="text-2xl font-semibold">fee Info</h3>
          </div>

          <div className="feeIngo-div flex justify-center gap-80 py-4">
            <div className="left space-y-6">
              <div className="flex p-2 gap-2 ">
                <BsCashStack size={35} className="text-primary-blue   " />

                <input
                  placeholder="Monthly Fee"
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                  type="text"
                  id="Monthly_Fee"
                  name="Monthly_Fee"
                  value={formData.Monthly_Fee}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="flex p-2 gap-2 ">
                <BsCashStack size={35} className="text-primary-blue   " />
                <input
                  placeholder="Net Fee"
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                  type="text"
                  name="Net_Fee"
                  value={formData.Net_Fee}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="flex p-2 gap-2 ">
                <GiSecurityGate size={35} className="text-primary-blue   " />
                <input
                  placeholder="Security DEP"
                  className="border-b-2 border-black-400 px-3 pb-2  w-80 placeholder-black-400 outline-none text-xl"
                  type="text"
                  id="Security_DEP"
                  name="Security_DEP"
                  value={formData.Security_DEP}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div className="right space-y-6 mt-1">
              <div className="flex p-2 gap-2">
                <RiLuggageDepositLine size={35} className="text-primary-blue" />
                <select
                  className="border-b-2 border-black-400 px-3 pb-2 w-80 outline-none text-xl text-primary-green font-semibold"
                  id="Discount"
                  name="Discount"
                  value={formData.Discount}
                  onChange={(e) => handleChange(e)}
                >
                  <option value="" disabled selected hidden>
                    Discount
                  </option>
                  <option value="25%">siblings : 25%</option>
                  <option value="50%">orphan: 50%</option>
                  <option value="75%">health issues: 75%</option>
                </select>
              </div>

              <div className="flex p-2 gap-2">
                <RiLuggageDepositLine size={35} className="text-primary-blue" />
                <select
                  className="border-b-2 border-black-400 px-3 pb-2 w-80 outline-none text-xl text-primary-green font-semibold"
                  id="Select_Area"
                  name="Select_Area"
                  value={formData.Select_Area}
                  onChange={(e) => handleChange(e)}
                >
                  <option value="" disabled selected hidden>
                    Select Area
                  </option>
                  <option value="Wah Cant">Wah Cant</option>
                  <option value="Khana pul">Khana pul</option>
                  <option value="Tramari">Tramari</option>
                  <option value="Blue Area">Blue Area</option>
                </select>
              </div>

              <div className="flex p-2 gap-2 ">
                <RiLuggageDepositLine size={35} className="text-primary-blue" />
                <label className="text-xl ml-4 mt-1 text-primary-blue">
                  Security Refunded
                </label>
                <input
                  className="border-b-2 mt-1 border-black-400  pb-2   placeholder-black-400 outline-none text-xl"
                  type="checkbox"
                  name="Security_Funded"
                  id="Security_Funded"
                  value={formData.Security_Funded}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="flex p-2 gap-2 ">
                <button
                  className="bg-primary-green  py-3 px-6 rounded-md text-lg text-white"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default AdmissionFromComponent;
