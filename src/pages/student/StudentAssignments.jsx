import DashLayout from "../../components/layout/DashLayout";
import TeacherContext from "../../context/teacherContext";
import ProfilePic from "../../components/icons/ProfilePic";
import TeacherIcon from "../../components/icons/TeacherIcon";
import StudentIcon from "../../components/icons/StudentIcon";

import { useContext, useEffect, useState } from "react";
import { SiGoogleclassroom } from "react-icons/si";
import { GoBell } from "react-icons/go";
import { getAllAssignments } from "../../utils/helperFuncitons";

export default function StudentAssignmetns() {
  const { students, userData } = useContext(TeacherContext);
  const [submittedAssignments, setSubmittedAssingments] = useState([]);
  const [dueAssignmets, setDueAssignments] = useState([]);
  const student = students[0];

  // getting all the assignments from the student object
  useEffect(() => {
    const allAss = getAllAssignments(student.classes);
    const subAss = allAss.filter((a) => a.submitted);
    const dueAss = allAss.filter((a) => !a.sunmitted);
    setSubmittedAssingments(subAss);
    setDueAssignments(dueAss);
  }, [student]);

  return (
    <DashLayout>
      {student.classes.map((c) => {
        return (
          <section className="my-10 bg-card-gradient w-full rounded-t-xl">
            <div className=" py-4 mx-6 flex items-center gap-2 border-b border-gray-300">
              <h2 className="text-xl text-purple-900 font-bold">
                {c.classCode}
              </h2>
              <SiGoogleclassroom size="20px" color="green" />
              <figure className="ml-auto relative isolate">
                <GoBell className="" size="25px" color="#F2CA00" />
                <div className="w-2.5 h-2.5 rounded-full absolute right-0.5 top-0 bg-green-600"></div>
              </figure>
            </div>
            <div className="py-4 mx-6 flex items-center gap-2">
              <ProfilePic picture={userData.picture} />
              <h2 className="text-xl text-black font-semibold">
                {userData.name}
              </h2>
              <TeacherIcon />
            </div>
            <div className=" py-4 mx-6 flex items-center gap-2 border-b border-gray-300">
              <h2 className="text-xl text-purple-900 font-bold">Assignments</h2>
              <StudentIcon />
            </div>
          </section>
        );
      })}
    </DashLayout>
  );
}
