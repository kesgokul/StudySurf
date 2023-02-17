import Layout from "./Layout";
import fakeLogo from "/Ellipse.png";
import ProfilePic from "../icons/ProfilePic";
import DashIcon from "../icons/DashMenu";
import DashClipboardIcon from "../icons/DashClipboardIcon";
import DashProfileIcon from "../icons/DashIcon";
import { BiClipboard, BiUserPin } from "react-icons/bi";
import { BsGridFill } from "react-icons/bs";

import { motion } from "framer-motion";

import { useNavigate, useLocation } from "react-router-dom";
import { useCallback, useState } from "react";

const navPaths = [
  "/teacher/dashboard",
  "/teacher/dashboard/submissions",
  "/teacher/profile",
];

export default function DashLayout(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePage, setActivePage] = useState(
    navPaths.indexOf(location.pathname)
  );

  const handleNavIconClick = useCallback(
    (nav) => {
      setActivePage(nav);
      navigate(navPaths[nav]);
    },
    [navPaths]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}

      className="w-screen h-auto min-h-screen max-w-xl bg-gradient-to-br from-white to-rose-100 flex flex-col items-center relative "
    >
      <div className=" mt-10 px-4 w-full flex justify-between items-center">
        <div className="flex justify-start items-center gap-1">
          <img className=" w-14 h-14" src={fakeLogo} alt="logo" />
          <p className="text-orange-500 font-righteous">Splash Screen</p>
        </div>
        <ProfilePic teacher={props.teacher ? true : false} />
      </div>
      {props.children}

      <div className=" mx-auto h-14 w-full max-w-xl flex justify-around items-center bg-white fixed bottom-0">
        <BsGridFill
          onClick={() => handleNavIconClick(0)}
          on
          size={"30px"}
          color={`${activePage === 0 ? "orange" : "gray"}`}
          cursor="pointer"
        />
        <BiClipboard
          onClick={() => handleNavIconClick(1)}
          color={`${activePage === 1 ? "orange" : "gray"}`}
          cursor="pointer"
          size="30px"
        />
        <BiUserPin
          onClick={() => handleNavIconClick(2)}
          size="30px"
          color={`${activePage === 2 ? "orange" : "gray"}`}
          cursor="pointer"
        />
      </div>
    </motion.div>
  );
}
