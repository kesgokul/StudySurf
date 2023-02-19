import DashLayout from "../../components/layout/DashLayout";
import StudentIcon from "../../components/icons/StudentIcon";
import ProfileInfoCard from "../../components/cards/ProfileInfoCard";
import TeacherContext from "../../context/userContext";
import ButtonCard from "../../components/cards/ButtonCard";

import { FaUserEdit, FaCrown } from "react-icons/fa";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { GiVibratingBall } from "react-icons/gi";
import { BsBookmarkFill } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";

import { useContext, useEffect } from "react";
import { useAuth } from "@arcana/auth-react";
import { useNavigate } from "react-router-dom";

export default function StudentProfile() {
  const teacherContext = useContext(TeacherContext);
  const { students } = teacherContext;
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const studentData = {
    name: students[0].name,
    email: students[0].email,
    id: students[0].studentId,
    contact: students[0].contact,
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/not-logged-in");
    }
  }, [isLoggedIn]);

  return (
    <DashLayout>
      <main className="my-10 bg-card-gradient w-full h-full rounded-t-xl">
        <div className=" py-4 px-6 flex items-center gap-2">
          <h2 className="text-xl font-bold text-violet-800">Profile</h2>
          <StudentIcon />
          <FaUserEdit
            className="ml-auto"
            size={"25px"}
            color="gray"
            cursor="pointer"
          />
          <HiQuestionMarkCircle size={"25px"} color="#434343" />
        </div>
        <ProfileInfoCard {...studentData} classCode={null} />
        <div className="px-4 pt-10 bg-card-gradient rounded-t-xl">
          {/* <ButtonCard styles="bg-gold-gradient  bg-lg bg-left-top">
            <p className="text-red-500 text-2xl font-semibold">Premium</p>
            <figure className="p-1.5 border-2 border-red-500 bg-white rounded-full">
              <FaCrown size={"20px"} color="red" />
            </figure>
          </ButtonCard> */}
          <ButtonCard styles=" bg-input-orange">
            <p className="text-white text-2xl font-semibold">Push Alerts</p>
            <GiVibratingBall size={"25px"} color="white" />
          </ButtonCard>
          <ButtonCard styles=" bg-input-orange">
            <p className="text-white text-2xl font-semibold">Your Bookmarks</p>
            <BsBookmarkFill size={"25px"} color="white" />
          </ButtonCard>
          <ButtonCard styles=" bg-red-500">
            <p className="text-white text-2xl font-semibold">Logout</p>
            <RiLogoutCircleRLine size={"25px"} color="white" />
          </ButtonCard>
        </div>
      </main>
    </DashLayout>
  );
}
