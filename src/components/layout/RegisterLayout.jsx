import Layout from "./Layout";
import fakeLogo from "/Ellipse.png";
import fakeProfile from "/profile-pic.png";

import { motion } from "framer-motion";

export default function RegisterLayout(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-screen h-auto min-h-screen bg-gradient-to-br from-white to-rose-100 flex flex-col justify-between items-center"
    >
      <div className="mb-auto mt-10 px-4 w-full flex justify-between items-center">
        <div className="flex justify-start items-center gap-1">
          <img className=" w-14 h-14" src={fakeLogo} alt="logo" />
          <p className="text-orange-500 font-righteous">Splash Screen</p>
        </div>
        <img className="w-10 h-10" src={fakeProfile} alt="profile picture" />
      </div>
      {...props.children}
      <p className={"mt-auto text-gray-400"}>
        ©Splash Screen | All rights reserved
      </p>
    </motion.div>
  );
}
