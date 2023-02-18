import teacherImage from "/teacher.png";
import studentImage from "/Man Student.png";
import fakeLogo from "/Ellipse.png";
import Layout from "../components/layout/Layout";

import StudentIcon from "../components/icons/StudentIcon";
import TeacherIcon from "../components/icons/TeacherIcon";
import TeacherContext from "../context/teacherContext";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { useAuth } from "@arcana/auth-react";

const cardAnimate = {
  scale: 1.1,
};

export default function WhoAreYou() {
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  const { userData } = useContext(TeacherContext);

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate("/login");
    }
  }, [isLoggedIn]);
  // console.log(userData);
  return (
    <Layout transition={{ opacity: { duration: 1 } }}>
      <img className=" mt-10 w-20 h-20" src={fakeLogo} alt="logo" />
      <h2 className=" mt-auto text-xl text-black font-semibold">
        Are you a __________ ?
      </h2>
      <div className="mt-10 mb-auto flex flex-col items-center gap-6 w-full max-w-md">
        <motion.div
          onClick={() => navigate("/teacher")}
          whileHover={cardAnimate}
          whileTap={cardAnimate}
          className=" px-6 py-4 flex items-center gap-6 border-2 bg-purple-100  rounded-2xl w-3/4 max-w-md cursor-pointer"
        >
          <div className="p-4 bg-purple-300 rounded-2xl">
            <TeacherIcon styles={"w-8 h-8"} />
          </div>
          <p className="text-2xl font-bold">Teacher</p>
        </motion.div>
        <motion.div
          onClick={() => navigate("/student")}
          whileHover={cardAnimate}
          whileTap={cardAnimate}
          className=" px-6 py-4 flex items-center gap-6 border-2 bg-green-100  rounded-2xl w-3/4 max-w-md cursor-pointer"
        >
          <div className="p-4 bg-green-300 rounded-2xl">
            <StudentIcon styles={"w-8 h-8"} />
          </div>
          <p className="text-2xl font-bold">Student</p>
        </motion.div>
      </div>
    </Layout>
  );
}
