import { createContext, useState } from "react";

const TeacherContext = createContext({
  userName: "",
  classCode: "",
  students: [],
  setUserName: () => {},
  setClassCode: () => {},
  setStudents: () => {},
});

export function TeacherContextProvider({ children }) {
  const [userName, setUserName] = useState("");
  const [classCode, setClassCode] = useState("");
  const [students, setStudents] = useState([]);

  const value = {
    userName,
    classCode,
    students,
    setUserName,
    setClassCode,
    setStudents,
  };

  return (
    <TeacherContext.Provider value={""}>{children}</TeacherContext.Provider>
  );
}

export default TeacherContext;
