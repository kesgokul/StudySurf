import DashLayout from "../../components/layout/DashLayout";
import TeacherContext from "../../context/teacherContext";
import ProfilePic from "../../components/icons/ProfilePic";
import TeacherIcon from "../../components/icons/TeacherIcon";
import StudentIcon from "../../components/icons/StudentIcon";
import StudentAssignmentCard from "../../components/cards/StudentAssignMentCard";
import CurvedArrow from "../../components/icons/CurvedArrow";

import { useContext, useEffect, useState } from "react";
import { SiGoogleclassroom } from "react-icons/si";
import { GoBell } from "react-icons/go";
import { getAllAssignments } from "../../utils/helperFuncitons";

export default function StudentAssignmetns() {
  const { students, userData } = useContext(TeacherContext);
  const student = students[0];

  // getting all the assignments from the student object
  //   const [assignmets, setAssignments] = useState([]);
  //   useEffect(() => {
  //     const allAss = getAllAssignments(student.classes);

  //     setAssignments(allAss);
  //   }, [student]);

  return (
    <DashLayout>
      <main className="mt-10 mb-20">
        {student.classes.map((c) => {
          return (
            <section
              key={c.classCode}
              className="bg-card-gradient w-full rounded-t-xl"
            >
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
              <section className="mt-6 bg-card-gradient-1 w-full rounded-t-xl">
                <div className=" py-4 mx-6 flex items-center gap-2 border-b border-gray-300">
                  <h2 className="text-xl text-purple-900 font-bold">
                    Assignments
                  </h2>
                  <StudentIcon />
                </div>
                {c.assignments.map((a) => {
                  return (
                    <StudentAssignmentCard
                      key={student.id + a.name}
                      assignment={a}
                    />
                  );
                })}
              </section>
            </section>
          );
        })}
      </main>
    </DashLayout>
  );
}
