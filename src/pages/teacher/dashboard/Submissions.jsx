import fakePdf from "/fake.pdf";
import { useContext, useEffect, useState } from "react";
// import { getStudentAssignments } from "../../../utils/helperFuncitons";
import StudentIcon from "../../../components/icons/StudentIcon";
import { SlRefresh } from "react-icons/sl";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { fakeSubbmissions } from "../../../fakeData";

import DashLayout from "../../../components/layout/DashLayout";
import TeacherContext from "../../../context/teacherContext";
import SubmissionCard from "../../../components/cards/SubmissionCard";

export default function Submissions() {
  const teacherContext = useContext(TeacherContext);
  const { classCode, students } = teacherContext;

  // function getSubbmissions(student) {
  //   return student.classes.assignmetns.filter((a) => a.submitted);
  // }

  // useEffect(() => {
  //   let sub = [];
  //   students.forEach((s) => {
  //     sub.push(getSubbmissions(s));
  //   });
  //   setSubmissions(sub);
  // }, [students]);

  return (
    <DashLayout>
      <div className="w-full h-full p-4 bg-white flex items-center gap-2 bg-card-gradient rounded-t-xl border-b border-b-gray-300">
        <h2 className=" text-green-700 text-xl font-bold">Submissions</h2>
        <StudentIcon />
        <SlRefresh className="ml-auto" size={"25px"} />
        <HiOutlineMagnifyingGlass size={"25px"} />
      </div>
      {fakeSubbmissions.map((sub) => {
        return <SubmissionCard key={sub.studentId + sub.assignment} {...sub} />;
      })}
    </DashLayout>
  );
}
