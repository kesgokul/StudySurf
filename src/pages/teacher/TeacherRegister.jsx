import fakeLogo from "/Ellipse.png";
import fakeProfile from "/profile-pic.png";
import TeacherForm from "../../components/TeacherForm";
import RegisterLayout from "../../components/layout/RegisterLayout";

import { useAuth } from "@arcana/auth-react";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "../../context/userContext";

export default function TeacherRegister() {
  const [userName, setUserName] = useState("");
  const { user, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { setUserData, userData } = useContext(UserContext);

  function handleFormSubmit(data) {
    const userObj = {
      userType: "teacher",
      email: user.id,
      picture: user.picture,
      walletAddress: user.address,
      name: data.fullName,
      teacherId: data.teacherId,
      contact: data.contact && data.contact,
    };
    setUserData(userObj);
    navigate("/teacher/select-class");
  }

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    <RegisterLayout teacher={true}>
      <h2 className="mt-10 text-2xl font-semibold">Add you details</h2>
      <TeacherForm onFormSubmit={handleFormSubmit} />
    </RegisterLayout>
  );
}
