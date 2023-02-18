import classroomImage from "/teacher-classroom.png";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@arcana/auth-react";

import RegisterLayout from "../../components/layout/RegisterLayout";
import TeacherIcon from "../../components/icons/TeacherIcon";
import TeacherContext from "../../context/teacherContext";
export default function SelectClass() {
  const options = ["CHEMII2023B", "MATHI2023F", "BIOIII2023D"];

  const { setUserData, userData } = useContext(TeacherContext);
  const navigate = useNavigate();

  const [inputTouched, setInputToucher] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const [inputValue, setInputValue] = useState("");
  //   const [filteredOptions, setFilteredOptions] = useState(options);

  const { isLoggedIn } = useAuth();

  function handleChange(event) {
    const value = event.target.value;
    setInputValue(value);
    // setFilteredOptions(
    //   options.filter((option) =>
    //     option.toLowerCase().includes(value.toLowerCase())
    //   )
    // );
  }

  function handleSelect(value) {
    setInputValue(value);
    // setFilteredOptions(options);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("submit");
    setUserData({ ...userData, classCode: inputValue });
    setInputValue("");
    navigate("/teacher/select-class/success");
  }

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
    // console.log(user);
  }, [isLoggedIn]);
  console.log(userData);

  return (
    <RegisterLayout teacher={true}>
      <img
        className=" mt-10 w-3/4 max-w-md h-auto"
        src={classroomImage}
        alt="image of classroom"
      />
      <TeacherIcon />

      {/* class input */}
      <form
        onSubmit={handleFormSubmit}
        className="mt-10 w-full h-auto max-w-md flex flex-col items-center "
      >
        <div className="w-11/12 h-16  flex items-center">
          <div className="w-4/5 h-full">
            <label
              className="pl-2 pt-1 flex bg-input-orange text-sm text-gray-300 rounded-tl-xl"
              htmlFor="class"
            >
              Create / Select a class
            </label>
            <input
              className="w-full pl-2 py-2 bg-input-orange text-white rounded-bl-xl uppercase focus:outline-none"
              name="class"
              type="text"
              value={inputValue}
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            onClick={() => setDropDown((s) => !s)}
            className="w-1/5 h-full flex items-center justify-center bg-input-brown text-white text-2xl font-bold rounded-r-xl"
          >
            {"\u2304"}
          </button>
          {/* {"\u2303"}*/}
        </div>
        <ul
          className={`w-5/6  px-2 bg-white mx-auto rounded-b-xl shadow-lg transition-all duration-200 ${
            dropDown ? "visible opacity-100 " : "invisible opacity-0  "
          }`}
        >
          {options.map((option) => (
            <li
              className="py-2 border-t-2 border-slate-200 cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
              key={option}
              onClick={() => {
                setDropDown(false);
                handleSelect(option);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
        <button
          type="submit"
          className="px-6 py-3 mb-10 bg-button-green rounded-xl "
        >
          <span className="pr-4">Next</span>
          {"\u27F6"}
        </button>
      </form>
    </RegisterLayout>
  );
}
