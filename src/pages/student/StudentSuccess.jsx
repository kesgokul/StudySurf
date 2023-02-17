
import React from "react";
import RegisterLayout from "../../components/layout/RegisterLayout";
import bgSuccess from "/bg-success.png";
import successTick from "/success-tick.png";
import TeacherIcon from "../../components/icons/TeacherIcon";

export default function success() {
  const myStyle = {
    backgroundImage: `url(${bgSuccess})`,
    width: "347px",
    height: "341px",
    left: "18px",
    top: "82px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const tickStyle = {
    position: "absolute",
    width: "180px",
    height: "233px",
    left: "1000px",
    top: "158px"
  }

  return (
    <RegisterLayout >
      <div style={myStyle}>
        <img src={successTick} />
      </div>
      <TeacherIcon/>
      <h1 className='text-xl text-green-600'>Success</h1>
      <p className='text-xs text-gray-500 px-5 text-center my-4' >You've successfully enrolled into the class</p>

      <button
        className=" py-4 mt-20 mx-auto w-1/2 font-bold bg-button-yellow text-green-600 text-lg rounded-xl hover:bg-green-500"
      >
        PROCEED
      </button>
    </RegisterLayout>
  )

}
