import TeacherIcon from "../icons/TeacherIcon";
import StudentIcon from "../icons/StudentIcon";
import ProfilePic from "../icons/ProfilePic";

import { RiUserAddFill } from "react-icons/ri";

export default function TeacherCard({ name, picture, classCode }) {
  return (
    <div className="w-full h-auto p-4 bg-card-gradient-1 rounded-t-xl">
      <div className="pb-3 flex justify-start items-center gap-2 border-b border-gray-300">
        <h2 className="text-xl font-bold">Teacher</h2>
        <TeacherIcon />
        <p className="ml-auto bg-gray-100 text-red-500 text-2xs p-0.5 border border-red-500">
          {classCode}
        </p>
      </div>
      <div className="flex py-3 justify-start items-center gap-2">
        <ProfilePic picture={picture} />
        <p className="text-xl uppercase font-bold">{name}</p>
      </div>
      <div className="mt-10 py-3 flex justify-start items-center gap-2 border-b border-gray-300  rounden-t-xl">
        <h2 className="text-xl font-bold">Students</h2>
        <StudentIcon />
        <RiUserAddFill className="ml-auto" size="25px" color="gray" />
      </div>
    </div>
  );
}
