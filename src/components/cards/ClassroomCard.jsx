import { SiAtom } from "react-icons/si";
import { GiFizzingFlask } from "react-icons/gi";
import { motion } from "framer-motion";

export default function ClassroomCard({ classCode, index, image }) {
  const cardAnimate = {
    scale: 1.05,
  };
  function toRomanNumeral(num) {
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let result = "";
    for (let key in romanNumerals) {
      while (num >= romanNumerals[key]) {
        result += key;
        num -= romanNumerals[key];
      }
    }
    return result;
  }

  return (
    <motion.main
      whileHover={cardAnimate}
      whileFocus={cardAnimate}
      className="my-4 w-full p-3 bg-gradient-to-br from-gray-50 via-pink-50 to-rose-200 rounded-xl flex items-center gap-4"
    >
      <figure className="p-2 border-2 border-input-orange rounded-xl flex justify-center items-center bg-white">
        {classCode.includes("CHE") ? (
          <GiFizzingFlask size={"60px"} />
        ) : (
          <SiAtom size={"70px"} />
        )}
      </figure>
      <div className="flex flex-col items-start justify-between">
        <p className="text-input-orange">{`Class ${toRomanNumeral(index)}`}</p>
        <h2 className="text-gray-600 text-2xl font-semibold">{classCode}</h2>
        <button className="mt-4 px-2 py-1 w-20 rounded-2xl text-xs text-white bg-input-orange">
          Enter
        </button>
      </div>
    </motion.main>
  );
}
