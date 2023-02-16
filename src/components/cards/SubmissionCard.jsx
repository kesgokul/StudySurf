import { formatDate } from "../../utils/helperFuncitons";
import { useState, useEffect, useContext, useRef } from "react";
import { BsPatchCheckFill, BsBookmarkPlusFill } from "react-icons/bs";
import { IoMdCheckmarkCircle, IoMdNotifications } from "react-icons/io";
import { useInView, motion } from "framer-motion";
import { MdDownloadForOffline } from "react-icons/md";

import ProfilePic from "../icons/ProfilePic";
import TeacherContext from "../../context/teacherContext";
import fakeProfilePic from "/profile-pic.png";
import fakeThumbnail from "/fake-thumbnail.png";
import AssesmentDetails from "../AssesmentDetails";
import NotificationIcon from "../icons/NotificaitonIcon";

export default function SubmissionCard({
  studentId,
  name,
  file,
  date,
  plagScore,
}) {
  const [student, setStudent] = useState({});
  const [notiSent, setNotiSent] = useState(false);
  const teacherContext = useContext(TeacherContext);
  const { students } = teacherContext;

  // unblur when in view config
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.75,
    once: true,
  });

  //getting the studentId in order to fetch the profile pic
  useEffect(() => {
    setStudent(students.find((s) => s.studentId === studentId));
  }, []);

  console.log(isInView);

  return (
    <main
      ref={ref}
      className={`w-full py-4 bg-inherit flex justify-center gap-2 ${
        isInView ? "blur-0" : "blur-sm"
      }`}
    >
      <ProfilePic picture={(student && student.picture) || fakeProfilePic} />
      <aside className="w-4/5 max-w-md bg-inherit">
        <div className="w-full px-2 bg-card-gradient-1 rounded-b-xl underline-offset-2 relative isolate">
          <BsPatchCheckFill
            className="absolute top-0 right-0 translate-x-2 -translate-y-2 bg-green"
            color="rgb(34, 197, 94)"
            size="30px"
          />
          <div className="flex gap-1 items-center">
            <IoMdCheckmarkCircle size={"20px"} color="green" />
            <p className="text-sm  py-1 underline ">{name}</p>
          </div>
          <time className=" ml-6 text-2xs pb-1">{`Submission date: ${formatDate(
            date
          )}`}</time>
          <figure className="w-4/5 mt-2 mx-auto relative isolate ">
            <img
              className="w-full rounded-t-xl blur-2xs"
              src={file}
              alt="thumbnail of the assignment file"
            />
            <button className=" px-3 py-1.5 absolute bottom-6 left-1/2 -translate-x-1/2 bg-input-orange text-white rounded-2xl">
              Tap to open
            </button>
          </figure>
        </div>
        <section>
          <AssesmentDetails plagScore={plagScore} />
        </section>
        <section className="flex items-center gap-2">
          {/** just the noti icon in the div > figure */}
          {notiSent ? (
            <div className="p-0.5 bg-yellow-100 border border-gray-500 rounded-full">
              <IoMdCheckmarkCircle size={"25px"} color="green" />
            </div>
          ) : (
            <div className="p-1 bg-yellow-200 rounded-full border border-yellow-400">
              <figure className="bg-red-500 rounded-full p-0.5">
                {<IoMdNotifications size={"20px"} color="rgb(254 240 138)" />}
              </figure>
            </div>
          )}
          <button
            onClick={() => setNotiSent((s) => !s)}
            className={`px-2 py-0.5 text-white text-xs rounded-xl ${
              notiSent ? "bg-blue-800" : "bg-input-orange"
            }`}
          >
            Send Notification
            <span
              className={`${
                notiSent ? "text-green-400" : "text-blue-900"
              } text-2xs`}
            >
              {" "}
              - #54AD6{" "}
            </span>{" "}
          </button>
          <MdDownloadForOffline className="ml-auto" size="30px" color="green" />
          <BsBookmarkPlusFill size="25px" color={"rgb(255 146 7)"} />
        </section>
      </aside>
    </main>
  );
}
