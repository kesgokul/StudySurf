import DashLayout from "../../components/layout/DashLayout";
import StudentIcon from "../../components/icons/StudentIcon";
import UserContext from "../../context/userContext";
import ClassroomCard from "../../components/cards/ClassroomCard";

import { FaUserEdit } from "react-icons/fa";
import { useContext } from "react";

import { useEffect } from "react";
import { useAuth } from "@arcana/auth-react";

export default function StudentDashboard() {
  const { students } = useContext(UserContext);
  const student = students[0];

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      if (!isLoggedIn) {
        navigate("/not-logged-in");
      }
    }, 4000);
  }, [isLoggedIn]);

  return (
    <DashLayout>
      <main className="my-10 bg-card-gradient w-full h-full rounded-t-xl">
        <div className=" py-4 px-6 flex items-center gap-2">
          <h2 className="text-xl font-bold text-violet-800">Dashboard</h2>
          <StudentIcon />
          <FaUserEdit
            className="ml-auto"
            size={"25px"}
            color="gray"
            cursor="pointer"
          />
        </div>
        <section className="py-4 px-6 bg-card-gradient w-full h-full rounded-t-xl">
          {student.classes.map((c, i) => {
            return (
              <ClassroomCard
                key={c.classCode}
                name={c.name}
                index={i + 1}
                classCode={c.classCode}
              />
            );
          })}
        </section>
      </main>
    </DashLayout>
  );
}
