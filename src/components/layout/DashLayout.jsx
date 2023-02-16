import Layout from "./Layout";
import fakeLogo from "/Ellipse.png";
import ProfilePic from "../icons/ProfilePic";
import DashIcon from "../icons/DashMenu";
import DashClipboardIcon from "../icons/DashClipboardIcon";
import DashProfileIcon from "../icons/DashIcon";
import { BiClipboard, BiUserPin } from "react-icons/bi";
import { BsGridFill } from "react-icons/bs";

import { motion } from "framer-motion";

export default function DashLayout(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-screen h-auto min-h-screen bg-gradient-to-br from-white to-rose-100 flex flex-col justify-between items-center"
    >
      <div className=" mt-10 px-4 w-full flex justify-between items-center">
        <div className="flex justify-start items-center gap-1">
          <img className=" w-14 h-14" src={fakeLogo} alt="logo" />
          <p className="text-orange-500 font-righteous">Splash Screen</p>
        </div>
        <ProfilePic teacher={props.teacher ? true : false} />
      </div>
      {props.children}
      <div className=" h-14 w-full flex justify-around items-center bg-white fixed bottom-0">
        <BsGridFill size={"30px"} color="orange" />
        <BiClipboard color="orange" size="30px" />
        <BiUserPin size="30px" color="orange" />
      </div>
    </motion.div>
  );
}
