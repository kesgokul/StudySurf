import { BsPhoneFill } from "react-icons/bs";
import { RiFileUserLine } from "react-icons/ri";
import { GrMail } from "react-icons/gr";

import ProfilePic from "../icons/ProfilePic";

export default function ProfileInfoCard({
  name,
  picture,
  contact,
  id,
  email,
  classCode,
}) {
  return (
    <main className="w-full py-4  rounded-t-xl bg-card-gradient-1  ">
      <div className=" px-4 py-2 flex items-center gap-3">
        <ProfilePic picture={picture} />
        <h2 className="text-2xl font-bold">{name}</h2>
        {classCode && (
          <p className="ml-auto bg-white text-red-500 text-2xs p-0.5 border border-red-500">
            {classCode}
          </p>
        )}
      </div>
      <article className="ml-14 flex flex-col items-start gap-1 ">
        <div className="flex items-center gap-4">
          <BsPhoneFill size="15px" color="gray" />
          <p className="text-sm text-gray-500">{contact}</p>
        </div>
        <div className="flex items-center gap-4">
          <RiFileUserLine size="15px" color="gray" />
          <p className="text-sm text-gray-500">{id}</p>
        </div>
        <div className="flex items-center gap-4">
          <GrMail size="15px" color="gray" />
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </article>
    </main>
  );
}
