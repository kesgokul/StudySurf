import { useEffect } from "react";
// import "./App.css";
import { motion } from "framer-motion";
import fakeLogo from "/Ellipse.png";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/whoAreYou");
    }, 2000);
  }, []);

  return (
    <div className={"w-screen h-screen"}>
      <motion.div className="w-full h-full bg-gradient-to-br from-orange-500 to-orange-400 object-cover bg-no-repeat flex flex-col justify-center items-center">
        <img src={fakeLogo} className="mt-auto h-40 w-40 " alt="app logo" />
        <motion.h1
          className={"self-center mt-4 text-white font-righteous"}
          initial={{ opacity: 0 }}
          animate={{ y: [0, 15, 0], opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          Splash screen
        </motion.h1>
        <p className={"mt-auto text-white"}>
          ©Splash Screen | All rights reserved
        </p>
      </motion.div>
    </div>
  );
}

export default App;
