import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ProfilePic from "../../icons/ProfilePic";

import { similarity } from "../../../compare/compare";
import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";

export default function PlagScoreModal({ sub1, sub2, onClose }) {
  const [score, setScore] = useState(0);
  const files = [sub1.doc, sub2.doc];

  useEffect(() => {
    // calculateScore();
    (async function () {
      const result = await similarity(sub1.doc, sub2.doc);
      setScore(result);
    })();
  }, []);

  return (
    <>
      <div className="w-full h-inherit bg-black opacity-30 absolute inset-0"></div>
      <div className=" px-6 py-6 w-11/12 h-auto bg-gray-100 rounded-xl border-2 border-gray-500 absolute top-24 left-1/2 -translate-x-1/2">
        <GrClose
          onClick={() => onClose()}
          className="ml-auto"
          size="25px"
          color="black"
          cursor={"pointer"}
        />
        <h1 className="my-5 mt-5 text-2xl font-bold text-gray-700">
          {sub1.assignment}
        </h1>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ProfilePic picture={sub1.picture} />
            <p className="text-md font-semibold text-purple-900">
              {sub1.student}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ProfilePic picture={sub2.picture} />
            <p className="text-md font-semibold text-blue-900">
              {sub2.student}
            </p>
          </div>
        </div>
        <h2 className="my-5 pl-10 text-sm underline underline-offset-3">
          Similarity Score:
        </h2>
        <figure className=" w-32 mx-auto shadow-2xl rounded-full">
          <CircularProgressbar
            value={score}
            text={`${score}%`}
            styles={buildStyles({
              pathColor: `${score < 30 ? "green" : "red"}`,
              textSize: "20px",
              pathTransitionDuration: 0.5,
              pathTransition: "ease",
            })}
          />
        </figure>{" "}
      </div>
    </>
  );
}
