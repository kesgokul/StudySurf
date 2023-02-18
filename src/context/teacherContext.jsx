import { createContext, useState, useEffect } from "react";
import { fakeStudentData } from "../fakeData";

const userObj = {
  name: "Gokul Sharma",
  picture: "/hape.png",

  email: "gokulSharma@devfoliio.edu",
  contact: "+91-9834982374",
  teacherId: "23423434",
};

const TeacherContext = createContext({
  userData: {},
  students: [],
  setUserData: () => {},
  setStudents: () => {},
});

export function TeacherContextProvider({ children }) {
  const [userData, setUserData] = useState(() => {
    const storedState = localStorage.getItem("surfUser");
    return storedState ? JSON.parse(storedState) : {};
  });
  const [students, setStudents] = useState(fakeStudentData);

  const value = {
    userData,
    students,
    setUserData,
    setStudents,
  };

  // storing the userData in localStorage on change
  useEffect(() => {
    localStorage.setItem("surfUser", JSON.stringify(userData));
  }, [userData]);

  return (
    <TeacherContext.Provider value={value}>{children}</TeacherContext.Provider>
  );
}

export default TeacherContext;
