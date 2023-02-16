import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const analysisData = {
  assignmentId: "#54AD6",
  matches: [
    {
      matchWith: "#54AF2",
      percentage: 66,
    },
    {
      matchWith: "#54BA7",
      percentage: 61,
    },
  ],
};

export default function AssesmentDetails({ plagScore }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <main className="py-2">
      <div className="flex items-center gap-2">
        <figure className=" w-6">
          <CircularProgressbar
            value={plagScore}
            text={`${plagScore}%`}
            styles={buildStyles({
              pathColor: `${plagScore < 30 ? "green" : "red"}`,
              textSize: "30px",
              pathTransitionDuration: 0.5,
              pathTransition: "ease",
            })}
          />
        </figure>
        <h2 className="text-sm">
          Plagiarims Score:{" "}
          <span
            className={` no-underline ${
              plagScore < 30 ? "text-green-500" : "text-red-500"
            }`}
          >
            {`${plagScore}%`}
          </span>
        </h2>
        <button
          onClick={() => setShowDetails((s) => !s)}
          className="ml-auto bg-none underline text-xs text-purple-900"
        >{`${showDetails ? "Hide" : "Show"} Results`}</button>
      </div>
      <AnimatePresence>
        {showDetails && (
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [-10, 0] }}
            exit={{ opacity: 0, y: [0, -10] }}
            className="py-1 px-2"
          >
            <h3 className="mt-1 text-xs text text-gray-500">Analysis:</h3>
            <div>
              {analysisData.matches.map((m) => {
                return (
                  <div className="mt-2 flex justify-between text-xs">
                    <p>
                      <span className="bg-white text-blue-900 font-semibold">
                        {analysisData.assignmentId}
                      </span>{" "}
                      - Matches with{" "}
                      <span className="bg-white text-blue-900 font-semibold ml-3">
                        {m.matchWith}
                      </span>
                    </p>
                    <p className="px-1 border border-red-400">{`${m.percentage}%`}</p>
                  </div>
                );
              })}
            </div>
          </motion.article>
        )}
      </AnimatePresence>
    </main>
  );
}
