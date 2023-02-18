import DashLayout from "../../../components/layout/DashLayout";
import TeacherCard from "../../../components/cards/TeacherCard";
import StudentCard from "../../../components/cards/StudentCard";

import TeacherContext from "../../../context/teacherContext";
import { useContext } from "react";
import { getStudentAssignments } from "../../../utils/helperFuncitons";

export default function Dashboard() {
  const teacherContext = useContext(TeacherContext);
  const { students, userData } = teacherContext;

  // function getStudentAssignments(student) {
  //   const course = student.classes.find((c) => c.classCode === classCode);
  //   if (!course) {
  //     return null;
  //   }

  //   return course.assignments;
  // }

  return (
    <DashLayout>
      <span className="mt-10"></span>
      <TeacherCard name={userData.name} picture={userData.picture} />
      {students.length < 1 ? <p>You currently have no students</p> : ""}
      <div className="w-full mb-20 ">
        {students.map((s) => {
          return (
            <StudentCard
              key={s.studentId}
              name={s.name}
              picture={s.picture}
              assignments={getStudentAssignments(s)}
            />
          );
        })}
      </div>
    </DashLayout>
  );
}
