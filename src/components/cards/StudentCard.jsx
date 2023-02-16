import ProfilePic from "../icons/ProfilePic";
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { formatDate } from "../../utils/helperFuncitons";

export default function StudentCard({ name, picture, assignments }) {
  const [expanded, setExpanded] = useState(false);
  const [assignmentDue, setAssignmentDue] = useState(false);

  useEffect(() => {
    const due = assignments.some((a) => !a.submitted);

    setAssignmentDue(due);
  }, [assignments, assignmentDue]);

  return (
    <div className="w-full h-auto p-4 bg-card-gradient rounded-t-xl">
      <div className="py-2 flex items-center gap-4">
        <ProfilePic picture={picture} />
        <p className="text-lg">{name}</p>
        {!expanded ? (
          <MdOutlineExpandMore
            className="ml-auto"
            size={"35px"}
            color={assignmentDue ? "red" : "green"}
            cursor="pointer"
            onClick={() => setExpanded(true)}
          />
        ) : (
          <MdOutlineExpandLess
            className="ml-auto"
            size={"35px"}
            color={assignmentDue ? "red" : "green"}
            cursor="pointer"
            onClick={() => setExpanded(false)}
          />
        )}
      </div>
      {expanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [10, 0],
          }}
        >
          {assignments?.map((a) => {
            return (
              <div
                key={a.name}
                className="px-2 pt-2 flex justify-between items-center"
              >
                <p className="text-sm text-gray-500">{a.name}</p>
                <p
                  className={`text-xs flex items centers ${
                    a.submitted ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {!a.submitted && (
                    <span className="px-1 mr-1 text-2xs border border-red-500 text-red-500">
                      due
                    </span>
                  )}
                  {formatDate(a.deadline)}
                </p>
              </div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}
