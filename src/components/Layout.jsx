import { motion } from "framer-motion";

export default function Layout(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-screen h-screen bg-gradient-to-br from-white to-rose-100 flex flex-col justify-between items-center"
    >
      {...props.children}
      <p className={"mt-auto text-gray-400"}>
        ©Splash Screen | All rights reserved
      </p>
    </motion.div>
  );
}
