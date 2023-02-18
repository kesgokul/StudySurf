import DashLayout from "../../../components/layout/DashLayout";
import TeacherCard from "../../../components/cards/TeacherCard";
import StudentCard from "../../../components/cards/StudentCard";

import UserContext from "../../../context/userContext";
import { useContext } from "react";
import { getStudentAssignments } from "../../../utils/helperFuncitons";

export default function Dashboard() {
  const { students, userData } = useContext(UserContext);

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
      <TeacherCard
        name={userData.name}
        picture={userData.picture}
        classCode={userData.classCode}
      />
      {students.length < 1 ? <p>You currently have no students</p> : ""}
      <div className="w-full mb-20 ">
        {students.map((s) => {
          return (
            <StudentCard
              key={s.studentId}
              name={s.name}
              picture={s.picture}
              assignments={getStudentAssignments(s, userData.classCode)}
            />
          );
        })}
      </div>
    </DashLayout>
  );
}
