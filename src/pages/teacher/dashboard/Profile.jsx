import DashLayout from "../../../components/layout/DashLayout";
import TeacherIcon from "../../../components/icons/TeacherIcon";
import TeacherContext from "../../../context/teacherContext";
import ProfilePic from "../../../components/icons/ProfilePic";
import ButtonCard from "../../../components/cards/ButtonCard";
import ProfileInfoCard from "../../../components/cards/ProfileInfoCard";

import { FaUserEdit } from "react-icons/fa";
import { useContext } from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaCrown } from "react-icons/fa";
import { GiVibratingBall } from "react-icons/gi";

export default function Profile() {
  const teacherContext = useContext(TeacherContext);
  const { userData, classCode } = teacherContext;
  return (
    <DashLayout>
      <main className="my-10 bg-card-gradient w-full h-full rounded-t-xl">
        <div className=" p-4 flex items-center gap-2">
          <h2 className="text-xl font-bold text-violet-800">Profile</h2>
          <TeacherIcon />
          <FaUserEdit
            className="ml-auto"
            size={"25px"}
            color="gray"
            cursor="pointer"
          />
        </div>
        <ProfileInfoCard
          name={userData.name}
          picture={userData.picture}
          id={userData.teacherId}
          email={userData.email}
          contact={userData.contact}
          classCode={classCode}
        />
        <div className="mx-4 pt-10 bg-transparent border-t border-t-white">
          <ButtonCard styles="bg-gold-gradient  bg-lg bg-left-top">
            <p className="text-red-500 text-2xl font-semibold">Premium</p>
            <figure className="p-1.5 border-2 border-red-500 bg-white rounded-full">
              <FaCrown size={"20px"} color="red" />
            </figure>
          </ButtonCard>
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
