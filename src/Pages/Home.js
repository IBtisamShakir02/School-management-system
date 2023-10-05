import React from "react";
import "./Home.css";
import list from "../Images/list.png";
import admission from "../Images/admission.png";
import certificate from "../Images/certificate.png";
import bill from "../Images/bill.png";
import changefee from "../Images/changefee.png";
import recievedbill from "../Images/recievedbill.png";
import latefee from "../Images/latefee.png";
import idcard from "../Images/idcard.png";
import letter from "../Images/letter.png";
import student from "../Images/student.png";
import classs from "../Images/class.png";
import addbus from "../Images/addbus.png";
import phones from "../Images/phones.png";
import notdoc from "../Images/notdoc.png";
import excel from "../Images/excel.png";
import studentleft from "../Images/studentleft.png";
import reportAdd from "../Images/reportAdd.png";
import yearly from "../Images/yearly.png";
import house from "../Images/house.png";
import expenserepo from "../Images/expenserepo.png";
import chartofacc from "../Images/chartofacc.png";
import receiptvoucher from "../Images/receiptvoucher.png";
import absent from "../Images/absent.png";
import profitandloss from "../Images/profitandloss.png";
import cashbook from "../Images/cashbook.png";
import settings from "../Images/settings.png";
import ledgerdetails from "../Images/ledgerdetails.png";
import attendancestaff from "../Images/attendancestaff.png";
import infocheck from "../Images/infocheck.png";
import verify from "../Images/verify.png";
import smssetting from "../Images/smssetting.png";
import accountbalance from "../Images/accountbalance.png";
import journalvoucher from "../Images/journalvoucher.png";
import summary from "../Images/summary.png";
import editareas from "../Images/editareas.png";
import dailyattendance from "../Images/dailyattendance.png";
import attendanceReport from "../Images/attendanceReport.png";
import siblings from "../Images/siblings.png";
import balancesheet from "../Images/balancesheet.png";
import classwise from "../Images/classwise.png";
import vouchermoney from "../Images/vouchermoney.png";
import Ledger from "../Images/Ledger.png";
import changepass from "../Images/changepass.png";
import userss from "../Images/userss.png";
import addeditclass from "../Images/addeditclass.png";
import trialbalance from "../Images/trialbalance.png";
import absentstaff from "../Images/absentstaff.png";
import addaccount from "../Images/addaccount.png";
import bus from "../Images/bus.png";
import employeereport from "../Images/employeereport.png";
import receivings from "../Images/receivings.png";
import promoteclass from "../Images/promoteclass.png";
import employeephone from "../Images/employeephone.png";
import marksheet from "../Images/marksheet.png";
import monthlym from "../Images/monthlym.png";
import backup from "../Images/backup.png";
import sms from "../Images/sms.png";
import classwent from "../Images/classwent.png";
import addexam from "../Images/addexam.png";
import monthlybills from "../Images/monthlybills.png";
import billrepo from "../Images/billrepo.png";
import balance from "../Images/balance.png";
import print from "../Images/print.png";
import staffsalary from "../Images/staffsalary.png";
import billsdone from "../Images/billsdone.png";
import previousexams from "../Images/previousexams.png";
import resultenter from "../Images/resultenter.png";
import resultentry from "../Images/resultentry.png";
import comparison from "../Images/comparison.png";
import staffprofile from "../Images/staffprofile.png";
import examsubject from "../Images/examsubject.png";
import Card from "../Components/Card";
function Home() {
  return (
    <>
      <div className="outer-container bg-white">
        <div className="header-container shadow-md bg-primary-blue shadow-slate-500 mix-blend-normal">
          <h2 className="header-txt font-popins text-white">DashBoard</h2>
        </div>
        {/* <=======STUDENT RECORD========> */}
        <div className=" mt-10 ">
          <div className="w-[100%] h-[2.5rem] mb-[2px]">
            <div className="w-max h-[2.5rem] rounded-r-md bg-primary-blue ">
              <h3 className="text-white font-popins p-1 ml-9 text-xl mr-2">
                Student Records
              </h3>
            </div>
          </div>
          <div className=" main w-[97%] p-2  border-2 border-solid  border-primary-blue rounded-xl   ">
            <Card imag={admission} txt="Admission Form" />
            <Card imag={list} txt="Students List" />
            <Card imag={certificate} txt="Leaving Certificate " />
            <Card imag={dailyattendance} txt="Daily Attendance" />
            <Card imag={bill} txt="Generate Fee Bill" />
            <Card imag={recievedbill} txt="Fee Bill Recieving" />
            <Card imag={latefee} txt="Generate Late Fee Fine" />
            <Card imag={idcard} txt="Print I.D Card" />
            <Card imag={changefee} txt="Change Class Fee" />
            <Card imag={letter} txt="Transfer Letter" />
          </div>
        </div>
        {/* <=========STUDENT REPORTS========> */}
        <div className=" mt-8 mb-8">
          <div className="w-[100%] h-[2.5rem] mb-[2px]">
            <div className="w-max h-[2.5rem] rounded-r-md bg-primary-blue ">
              <h3 className="text-white font-popins p-1 ml-9 text-xl mr-2">
                Student Reports
              </h3>
            </div>
          </div>
          <div className=" main w-[97%] p-2  border-2 border-solid  border-primary-blue rounded-xl   ">
            <Card imag={student} txt="Current Students" />
            <Card imag={classs} txt="Class Wise Strength" />
            <Card imag={phones} txt="Student Contacts" />
            <Card imag={notdoc} txt="Incomplete Docs" />
            <Card imag={classwise} txt="Class and Age Wise Enrollment" />
            <Card imag={studentleft} txt="Left Students" />
            <Card imag={reportAdd} txt="Admission Report" />
            <Card imag={yearly} txt="Yearly Admission Summary" />
            <Card imag={house} txt="House Wise Report" />
            <Card imag={absent} txt="Absent Report" />
            <Card imag={infocheck} txt="Admission Info Check" />
            <Card imag={siblings} txt="Siblings Report" />
            <Card imag={summary} txt="OverAll Summary" />
            <Card imag={attendanceReport} txt="Attendance Report" />
          </div>
        </div>
        {/* <=============Students Fee Reports===========> */}
        <div className=" mt-8 mb-8">
          <div className="w-[100%] h-[2.5rem] mb-[2px]">
            <div className="w-max h-[2.5rem] rounded-r-md bg-primary-blue ">
              <h3 className="text-white font-popins p-1 ml-9 text-xl mr-2">
                Students Fee Reports
              </h3>
            </div>
          </div>
          <div className=" main w-[97%] p-2  border-2 border-solid  border-primary-blue rounded-xl  ">
            <Card imag={Ledger} txt="Student Ledger" />
            <Card imag={receivings} txt="Fee Receivings" />
            <Card imag={bus} txt="Transport Fee Details" />
            <Card imag={comparison} txt="Fee and Expence Comparison" />
            <Card imag={monthlym} txt="Monthly Fee Comparison" />
            <Card imag={billrepo} txt="Fee Bills List" />
            <Card imag={print} txt="Fee Bills Print" />
            <Card imag={balance} txt="Outstanding Balance" />
            <Card imag={billsdone} txt="Bills/Receivings" />
            <Card imag={monthlybills} txt="Month Wise Outstanding Report" />
          </div>
        </div>
        {/* <=============Examination===========> */}
        <div className=" mt-8 mb-8">
          <div className="w-[100%] h-[2.5rem] mb-[2px]">
            <div className="w-max h-[2.5rem] rounded-r-md bg-primary-blue ">
              <h3 className="text-white font-popins p-1 ml-9 text-xl mr-2">
                Examination
              </h3>
            </div>
          </div>
          <div className=" main w-[97%] p-2  border-2 border-solid  border-primary-blue rounded-xl  ">
            <Card imag={resultenter} txt="Result Entry" />
            <Card imag={resultentry} txt="Old Results" />
            <Card imag={addexam} txt="Add Examination" />
            <Card imag={examsubject} txt="Add Exam Subjects" />
            <Card imag={promoteclass} txt="Promote Class" />
            <Card imag={classwent} txt="Class Went Option" />
            <Card imag={previousexams} txt="Previuos Exams" />
            <Card imag={marksheet} txt="Exam Mark Sheet" />
          </div>
        </div>
        {/* <=============Staff Records===========> */}
        <div className=" mt-8 mb-8">
          <div className="w-[100%] h-[2.5rem] mb-[2px]">
            <div className="w-max h-[2.5rem] rounded-r-md bg-primary-blue ">
              <h3 className="text-white font-popins p-1 ml-9 text-xl mr-2">
                Staff Records
              </h3>
            </div>
          </div>
          <div className=" main w-[97%] p-2  border-2 border-solid  border-primary-blue rounded-xl  ">
            <Card imag={staffprofile} txt="Staff Profile" />
            <Card imag={attendancestaff} txt="Staff Attendance" />
            <Card imag={staffsalary} txt="Generate Staff Salary" />
            <Card imag={employeereport} txt="Employee Report" />
            <Card imag={employeephone} txt="Employee Phone" />
            <Card imag={absentstaff} txt="Absent Staff" />
          </div>
        </div>
        {/* <=============Finance===========> */}
        <div className=" mt-8 mb-8">
          <div className="w-[100%] h-[2.5rem] mb-[2px]">
            <div className="w-max h-[2.5rem] rounded-r-md bg-primary-blue ">
              <h3 className="text-white font-popins p-1 ml-9 text-xl mr-2">
                Finance
              </h3>
            </div>
          </div>
          <div className=" main w-[97%] p-2  border-2 border-solid  border-primary-blue rounded-xl  ">
            <Card imag={addaccount} txt="Add/Edit Account" />
            <Card imag={cashbook} txt="Cash Book" />
            <Card imag={vouchermoney} txt="Payment Voucher" />
            <Card imag={receiptvoucher} txt="Receipt Voucher" />
            <Card imag={journalvoucher} txt="Journal Voucher" />
            <Card imag={chartofacc} txt="Chart of Accounts" />
            <Card imag={ledgerdetails} txt="Ledger Details" />
            <Card imag={accountbalance} txt="Account Balances" />
            <Card imag={expenserepo} txt="Expense Report" />
            <Card imag={trialbalance} txt="Trial Balance" />
            <Card imag={profitandloss} txt="Profit & Loss" />
            <Card imag={balancesheet} txt="Balance Sheet" />
          </div>
        </div>
        {/* <=============Settings===========> */}
        <div className=" mt-8 mb-8">
          <div className="w-[100%] h-[2.5rem] mb-[2px]">
            <div className="w-max h-[2.5rem] rounded-r-md bg-primary-blue ">
              <h3 className="text-white font-popins p-1 ml-9 text-xl mr-2">
                Settings
              </h3>
            </div>
          </div>
          <div className=" main w-[97%] p-2  border-2 border-solid  border-primary-blue rounded-xl  ">
            <Card imag={addeditclass} txt="Add/Edit Classes" />
            <Card imag={editareas} txt="Add/Edit Areas" />
            <Card imag={settings} txt="Settings" />
            <Card imag={addbus} txt="Add/Edit Vehicles" />
            <Card imag={excel} txt="Import Excel" />
          </div>
        </div>
        {/* <=============Utilities===========> */}
        <div className=" mt-8 mb-8">
          <div className="w-[100%] h-[2.5rem] mb-[2px]">
            <div className="w-max h-[2.5rem] rounded-r-md bg-primary-blue ">
              <h3 className="text-white font-popins p-1 ml-9 text-xl mr-2">
                Utilities
              </h3>
            </div>
          </div>
          <div className=" main w-[97%] p-2  border-2 border-solid  border-primary-blue rounded-xl  ">
            <Card imag={userss} txt="Users" />
            <Card imag={changepass} txt="Change Password" />
            <Card imag={verify} txt="User Rights" />
            <Card imag={backup} txt="BackUp Data" />
          </div>
        </div>
        {/* <=============Messaging===========> */}
        <div className=" mt-8 mb-8">
          <div className="w-[100%] h-[2.5rem] mb-[2px]">
            <div className="w-max h-[2.5rem] rounded-r-md bg-primary-blue ">
              <h3 className="text-white font-popins p-1 ml-9 text-xl mr-2">
                Messaging
              </h3>
            </div>
          </div>
          <div className=" main w-[97%] p-2  border-2 border-solid border-primary-blue rounded-xl ">
            <Card imag={sms} txt="Write SMS" />
            <Card imag={smssetting} txt="Message Server Settings" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
