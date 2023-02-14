import fakeLogo from "/Ellipse.png";
import fakeProfile from "/profile-pic.png";
import TeacherForm from "../../components/TeacherForm";
import RegisterLayout from "../../components/layout/RegisterLayout";

import { useAuth } from "@arcana/auth-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TeacherRegister() {
  const [userName, setUserName] = useState("");
  // const { user, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/login");
  //   }
  // }, [isLoggedIn, user]);

  return (
    <RegisterLayout>
      <h2 className="mt-10 text-2xl font-semibold">Add you details</h2>
      <TeacherForm name={"gokul"} />
    </RegisterLayout>
  );
}