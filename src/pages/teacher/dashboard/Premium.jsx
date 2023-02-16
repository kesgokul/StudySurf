import DashLayout from "../../../components/layout/DashLayout";
import TeacherIcon from "../../../components/icons/TeacherIcon";
import TeacherContext from "../../../context/teacherContext";
import ProfilePic from "../../../components/icons/ProfilePic";

import { BsStars } from "react-icons/bs";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
import { useContext, useState } from "react";

export default function Premium() {
  const [yearlyPlan, setYearlyPlan] = useState(false);
  const teacherContext = useContext(TeacherContext);
  const { userData, classCode } = teacherContext;
  return (
    <DashLayout>
      <main className=" mt-10 w-full h-full  bg-black rounded-t-xl">
        <div className="p-4  flex items-center gap-4">
          <h2 className="text-xl font-bold text-transparent bg-gold-gradient bg-clip-text bg-lg bg-right-bottom">
            Premium
          </h2>
          <BsStars size={"25px"} color="#605100" />
          <TeacherIcon styles="ml-auto" />
          <HiQuestionMarkCircle size={"25px"} color="gray" />
        </div>
        <section className=" h-full bg-green-gradient rounded-t-xl">
          <div className=" p-4 flex items-center gap-2 ">
            <ProfilePic picture={userData.picture} />
            <h2 className="text-xl font-bold text-white">{userData.name}</h2>
            <p className="ml-auto bg-white text-red-500 text-2xs p-0.5 border border-red-500">
              {classCode}
            </p>
          </div>
          <div className="pb-10 flex justify-center items-center gap-4 border-b border-white">
            <GrMail size="15px" color="gray" />
            <p className="text-sm text-white">{userData.email}</p>
          </div>
          <article className="mt-8 flex flex-col items-center">
            <h2 className=" gap-2 uppercase text-xl text-white">
              It's easy to get started
            </h2>
            <p className="text-xs text-gray-400">
              Choose a plan tailored to your needs
            </p>
            <div className="my-10">
              <button
                onClick={() => setYearlyPlan((s) => !s)}
                className={`px-4 py-2 rounded-l-xl border ${
                  !yearlyPlan
                    ? "bg-white text-black"
                    : "bg-transparent text-white"
                } `}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearlyPlan((s) => !s)}
                className={`px-4 py-2 border rounded-r-xl ${
                  yearlyPlan
                    ? "bg-white text-black"
                    : "bg-transparent text-white"
                } `}
              >
                Yearly
              </button>
            </div>
          </article>
        </section>
      </main>
    </DashLayout>
  );
}
