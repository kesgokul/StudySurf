import DashLayout from "../../../components/layout/DashLayout";
import TeacherIcon from "../../../components/icons/TeacherIcon";
import TeacherContext from "../../../context/teacherContext";
import ProfilePic from "../../../components/icons/ProfilePic";
import ButtonCard from "../../../components/cards/ButtonCard";

import { FaUserEdit } from "react-icons/fa";
import { useContext } from "react";
import { BsPhoneFill, BsBookmarkFill } from "react-icons/bs";
import { RiFileUserLine, RiLogoutCircleRLine } from "react-icons/ri";
import { GrMail } from "react-icons/gr";
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
        <section className="w-full p-4 rounded-t-xl bg-card-gradient-1 border-b border-b-white">
          <div className=" px-4 py-2 flex items-center gap-2">
            <ProfilePic picture={userData.picture} />
            <h2 className="text-xl font-bold">{userData.name}</h2>
            <p className="ml-auto bg-white text-red-500 text-2xs p-0.5 border border-red-500">
              {classCode}
            </p>
          </div>
          <article className="ml-14 flex flex-col items-start gap-2">
            <div className="flex items-center gap-4">
              <BsPhoneFill size="15px" color="gray" />
              <p className="text-sm text-gray-500">{userData.contact}</p>
            </div>
            <div className="flex items-center gap-4">
              <RiFileUserLine size="15px" color="gray" />
              <p className="text-sm text-gray-500">{userData.teacherId}</p>
            </div>
            <div className="flex items-center gap-4">
              <GrMail size="15px" color="gray" />
              <p className="text-sm text-gray-500">{userData.email}</p>
            </div>
          </article>
        </section>
        <div className="px-4 pt-10 bg-card-gradient-1 rounded-t-xl">
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
