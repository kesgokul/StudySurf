import fakePdf from "/fake.pdf";
// import { getStudentAssignments } from "../../../utils/helperFuncitons";
import { SlRefresh } from "react-icons/sl";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllAssignments } from "../../../utils/helperFuncitons";
import { useAuth } from "@arcana/auth-react";

import DashLayout from "../../../components/layout/DashLayout";
import TeacherContext from "../../../context/userContext";
import SubmissionCard from "../../../components/cards/SubmissionCard";
import StudentIcon from "../../../components/icons/StudentIcon";
import PlagScoreModal from "../../../components/cards/modals/PlagScoreModal";

export default function Submissions() {
  const teacherContext = useContext(TeacherContext);
  const { classCode, students } = teacherContext;
  const [submissions, setSubmissions] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [comparing, setComparing] = useState(false);

  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();

  // Filtering the assignment submissions from the student data
  useEffect(() => {
    const allAssignments = students.flatMap((s) => {
      const allStudentAssignments = getAllAssignments(s.classes);
      const filteredAssignments = allStudentAssignments
        .filter((a) => a.submitted)
        .map((a) => {
          return {
            studentId: s.studentId,
            ...a,
          };
        });

      return filteredAssignments;
    });

    //setting the sumbissions state
    setSubmissions(allAssignments);
  }, [students]);

  function handleItemSelect(file) {
    if (selectedFiles.some((f) => f.student === file.student)) {
      setSelectedFiles((files) =>
        files.filter((f) => f.student !== file.student)
      );
    } else {
      setSelectedFiles([...selectedFiles, file]);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (!isLoggedIn) {
        navigate("/not-logged-in");
      }
    }, 4000);
  }, [isLoggedIn]);

  return (
    <DashLayout>
      <div className=" px-4 w-full h-full mt-4 py-4 mx-4 bg-white flex items-center gap-2 bg-card-gradient rounded-t-xl border-b border-b-gray-300">
        <h2 className=" text-green-700 text-xl font-bold">Submissions</h2>
        <StudentIcon />
        <SlRefresh className="ml-auto" size={"25px"} />
        <HiOutlineMagnifyingGlass size={"25px"} />
      </div>

      <section className="mb-20">
        {submissions.map((sub) => {
          return (
            <SubmissionCard
              onSelect={handleItemSelect}
              files={selectedFiles}
              key={sub.studentId + sub.name}
              {...sub}
            />
          );
        })}
      </section>
      {(selectedFiles.length === 0 || selectedFiles.length > 2) && (
        <button
          onClick={() => navigate("/teacher/profile/premium")}
          className="bg-gold-gradient bg-lg bg-left-top px-3 py-2 shadow-2xl rounded-3xl text-white fixed bottom-20  "
        >
          Get Premium
        </button>
      )}
      {selectedFiles.length === 2 && (
        <button
          onClick={() => setComparing(true)}
          className="bg-green-500 w-32 bg-lg bg-left-top px-4 py-2 shadow-2xl rounded-3xl text-white fixed bottom-20  "
        >
          Compare
        </button>
      )}
      {comparing && (
        <PlagScoreModal
          onClose={() => setComparing(false)}
          sub1={selectedFiles[0]}
          sub2={selectedFiles[1]}
        />
      )}
    </DashLayout>
  );
}
