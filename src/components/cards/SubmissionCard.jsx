import { useContext } from "react";
import { formatDate } from "../../utils/helperFuncitons";
import { useState, useEffect } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ProfilePic from "../icons/ProfilePic";
import TeacherContext from "../../context/teacherContext";
import fakeProfilePic from "/profile-pic.png";
import fakeThumbnail from "/fake-thumbnail.png";

export default function SubmissionCard({
  studentId,
  assignment,
  file,
  date,
  plagScore,
}) {
  const [student, setStudent] = useState({});
  const teacherContext = useContext(TeacherContext);
  const { students } = teacherContext;

  useEffect(() => {
    setStudent(students.find((s) => s.studentId === studentId));
  }, []);

  //   console.log(student);

  return (
    <div className="w-full py-4 bg-inherit flex justify-center gap-2 ">
      <ProfilePic picture={(student && student.picture) || fakeProfilePic} />
      <section className="w-4/5 max-w-md bg-inherit">
        <div className="w-full px-2 bg-card-gradient-1 rounded-b-xl underline-offset-2 relative isolate">
          <BsPatchCheckFill
            className="absolute top-0 right-0 translate-x-2 -translate-y-2 bg-green"
            color="rgb(34, 197, 94)"
            size="30px"
          />
          <div className="flex gap-1 items-center">
            <IoMdCheckmarkCircle size={"20px"} color="green" />
            <p className="text-sm  py-1 underline ">{assignment}</p>
          </div>
          <p className=" ml-6 text-2xs pb-1">{`Submission date: ${formatDate(
            date
          )}`}</p>
          <div className="w-4/5 mt-2 mx-auto relative isolate ">
            <img
              className="w-full rounded-t-xl blur-2xs"
              src={fakeThumbnail}
              alt="thumbnail of the assignment file"
            />
            <button className=" px-3 py-1.5 absolute bottom-6 left-1/2 -translate-x-1/2 bg-orange-400 text-white rounded-2xl">
              Tap to open
            </button>
          </div>
        </div>
        <div className=" w-6">
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
        </div>
      </section>
    </div>
  );
}
