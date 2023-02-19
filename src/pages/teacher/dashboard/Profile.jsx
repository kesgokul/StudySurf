import DashLayout from "../../../components/layout/DashLayout";
import TeacherIcon from "../../../components/icons/TeacherIcon";
import UserContext from "../../../context/userContext";
import ProfilePic from "../../../components/icons/ProfilePic";
import ButtonCard from "../../../components/cards/ButtonCard";
import ProfileInfoCard from "../../../components/cards/ProfileInfoCard";

import { FaUserEdit } from "react-icons/fa";
import { useContext, useState, useEffect } from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaCrown, FaEye } from "react-icons/fa";
import { GiVibratingBall } from "react-icons/gi";
import { TbCircleDotted } from "react-icons/tb";
import { IoCloseCircle } from "react-icons/io5";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@arcana/auth-react";

const notis = [
  {
    from: "#54AD6",
    seen: true,
  },
  {
    from: "#54AF2",
    seen: false,
  },
  {
    from: "#54CB6",
    seen: false,
  },
  {
    from: "#54LM8",
    seen: true,
  },
  {
    from: "#54XC7",
    seen: false,
  },
];

export default function Profile() {
  const { userData } = useContext(UserContext);
  const [notiExpanded, setNotiExpanded] = useState(false);
  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();

  //notification click handler
  function handleNotificationsCardClick() {
    setNotiExpanded((s) => !s);
  }

  function handlePremiumCardClick() {
    navigate("/teacher/profile/premium");
  }

  useEffect(() => {
    setTimeout(() => {
      if (!isLoggedIn) {
        navigate("/not-logged-in");
      }
    }, 4000);
  }, [isLoggedIn]);

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
          classCode={userData.classCode}
        />
        <div className="mx-4 pt-10 bg-transparent border-t border-t-white">
          <ButtonCard
            onClick={handlePremiumCardClick}
            styles="bg-gold-gradient  bg-lg bg-left-top"
          >
            <p className="text-red-500 text-2xl font-semibold">Premium</p>
            <figure className="p-1.5 border-2 border-red-500 bg-white rounded-full">
              <FaCrown size={"20px"} color="red" />
            </figure>
          </ButtonCard>
          <ButtonCard
            onClick={handleNotificationsCardClick}
            styles=" bg-orange-gradient"
          >
            <div className="w-full px-16 py-2 flex flex-col ">
              <div className="flex justify-between items-center">
                <p className="text-white text-2xl font-semibold">Push Alerts</p>
                <GiVibratingBall size={"25px"} color="white" />
              </div>

              {notiExpanded && (
                <motion.article
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: [-10, 0] }}
                  exit={{ opacity: 0, y: [0, -10] }}
                  className="mt-2 pb-2"
                >
                  {notis.map((n) => {
                    return (
                      <div
                        key={n.from}
                        className="pt-1 flex gap-2 justify-end items-center"
                      >
                        <TbCircleDotted size={"15px"} color="red" />
                        <p className="mr-auto px-1 bg-gray-200 text-xs text-blue-900 font-semibold">
                          {n.from}
                        </p>
                        {n.seen && <FaEye size={"15px"} color="green" />}
                        <IoCloseCircle size={"15px"} color="red" />
                      </div>
                    );
                  })}
                </motion.article>
              )}
            </div>
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
