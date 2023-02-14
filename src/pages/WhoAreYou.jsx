import teacherImage from "/teacher.png";
import studentImage from "/student-image.png";
import fakeLogo from "/Ellipse.png";
import Layout from "../components/Layout";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const cardAnimate = {
  scale: 1.1,
};

function WhoAreYou() {
  const navigate = useNavigate();
  return (
    <Layout transition={{ opacity: { duration: 1 } }}>
      <img className=" mt-10 w-20 h-20" src={fakeLogo} alt="logo" />
      <h2 className=" mt-auto text-xl text-black font-semibold">
        Are you a __________ ?
      </h2>
      <div className="mt-10 mb-auto flex flex-col items-center gap-6 w-full max-w-md">
        <motion.div
          onClick={() => navigate("/login")}
          whileHover={cardAnimate}
          whileTap={cardAnimate}
          className=" px-6 py-4 flex items-center gap-6 border-2 bg-purple-100  rounded-2xl w-3/4 max-w-md cursor-pointer"
        >
          <div className="p-4 bg-purple-300 rounded-2xl">
            <img src={teacherImage} alt="image of a teacher" />
          </div>
          <p className="text-2xl font-bold">Teacher</p>
        </motion.div>
        <motion.div
          onClick={() => navigate("/login")}
          whileHover={cardAnimate}
          whileTap={cardAnimate}
          className=" px-6 py-4 flex items-center gap-6 border-2 bg-green-100  rounded-2xl w-3/4 max-w-md cursor-pointer"
        >
          <div className="p-4 bg-green-300 rounded-2xl">
            <img src={studentImage} alt="image of a teacher" />
          </div>
          <p className="text-2xl font-bold">Student</p>
        </motion.div>
      </div>
    </Layout>
  );
}

export default WhoAreYou;
