import StudentForm from "../../components/StudentForm";
import RegisterLayout from "../../components/layout/RegisterLayout";
import UserContext from "../../context/userContext";

import { useAuth } from "@arcana/auth-react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentRegister() {
  const { user, isLoggedIn } = useAuth();
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  function handleFormSubmit(data) {
    console.log("submit");
    const userObj = {
      userType: "student",
      email: user.id,
      picture: user.picture,
      walletAddress: user.address,
      name: data.fullName,
      studentId: data.universityId,
      contact: data.contact && data.contact,
    };
    setUserData(userObj);
    navigate("/student/select-class");
  }

  useEffect(() => {
    setTimeout(() => {
      if (!isLoggedIn) {
        navigate("/not-logged-in");
      }
    }, 4000);
  }, [isLoggedIn]);

  // console.log(userData);
  return (
    <RegisterLayout>
      <h2 className="text-2xl font-semibold">Add you details</h2>
      <StudentForm onFormSubmit={handleFormSubmit} name={"gokul"} />
    </RegisterLayout>
  );
}
