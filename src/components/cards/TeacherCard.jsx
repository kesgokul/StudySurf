import TeacherIcon from "../icons/TeacherIcon";
import StudentIcon from "../icons/StudentIcon";
import ProfilePic from "../icons/ProfilePic";

import { RiUserAddFill } from "react-icons/ri";

export default function TeacherCard({ name, picture }) {
  return (
    <div className="w-full h-auto p-4 bg-card-gradient rounded-t-xl">
      <div className="pb-3 flex justify-start items-center gap-2 border-b border-gray-400">
        <h2 className="text-xl font-bold">Teacher</h2>
        <TeacherIcon />
      </div>
      <div className="flex py-3 justify-start items-center gap-2">
        <ProfilePic picture={picture} />
        <p className="text-xl uppercase font-bold">{name}</p>
      </div>
      <div className="mt-10 py-3 flex justify-start items-center gap-2 border-b border-gray-400 bg-card-gradient rounden-t-xl">
        <h2 className="text-xl font-bold">Students</h2>
        <StudentIcon />
        <RiUserAddFill className="ml-auto" size="25px" color="gray" />
      </div>
    </div>
  );
}
