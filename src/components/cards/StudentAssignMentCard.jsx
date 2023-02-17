import { formatDate } from "../../utils/helperFuncitons";
import { AiOutlinePaperClip } from "react-icons/ai";
import { FaFileUpload, FaShare } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";

import FileCard from "./FileCard";

export default function StudentAssignmentCard({ assignment }) {
  return (
    <main className="py-6 px-4 w-full rounded-t-xl">
      <div className="px-2 pt-2 flex justify-between items-center">
        <p className="text-sm text-gray-500">{assignment.name}</p>
        <p
          className={`text-xs flex items centers ${
            assignment.submitted ? "text-green-500" : "text-red-500"
          }`}
        >
          {!assignment.submitted && (
            <span className="px-1 mr-1 text-2xs border border-red-500 text-red-500">
              due
            </span>
          )}
          {formatDate(assignment.deadline)}
        </p>
      </div>
      <div className="px-2 pt-2 flex items-center">
        <AiOutlinePaperClip size="20px" color="gray" />
        <button className="px-1 flex items-center gap-1 bg-yellow-200">
          <p className="text-xs text-gray-500">
            {!assignment.submitted ? "Attach file" : assignment.name}
          </p>
          {!assignment.submitted && <FaFileUpload size={"15px"} color="gray" />}
        </button>
        {assignment.submitted && (
          <IoCopyOutline className="ml-2" size="18px" color="gray" />
        )}
      </div>
      {assignment.submitted && (
        <div className="mt-5 px-4 w-11/12 ml-auto relative isolate">
          <FileCard
            name={assignment.name}
            file={assignment.file}
            date={assignment.date}
          />
          <FaShare
            className=" -scale-x-100 rotate-180 absolute -top-4 -left-5"
            size={"30px"}
            color="gray"
          />
        </div>
      )}
    </main>
  );
}
