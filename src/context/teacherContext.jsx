import { createContext, useState } from "react";
import { fakeStudentData } from "../fakeData";

const userObj = {
  name: "Gokul Sharma",
  picture: "/hape.png",
};

const TeacherContext = createContext({
  userData: {},
  classCode: "",
  students: [],
  setUserData: () => {},
  setClassCode: () => {},
  setStudents: () => {},
});

export function TeacherContextProvider({ children }) {
  const [userData, setUserData] = useState(userObj);
  const [classCode, setClassCode] = useState("CHEMII2023D");
  const [students, setStudents] = useState(fakeStudentData);

  const value = {
    userData,
    classCode,
    students,
    setUserData,
    setClassCode,
    setStudents,
  };

  return (
    <TeacherContext.Provider value={value}>{children}</TeacherContext.Provider>
  );
}

export default TeacherContext;
