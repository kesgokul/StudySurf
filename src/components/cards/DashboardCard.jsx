import TeacherIcon from "../icons/TeacherIcon";
import StudentIcon from "../icons/StudentIcon";
import ProfilePic from "../icons/ProfilePic";

export default function DashboardCard({ teacher, children }) {
  return (
    <div className="w-full h-auto p-4 bg-card-gradient rounded-xl">
      <div className="pb-3 flex justify-start items-center gap-2 border-b border-gray-400">
        <h2 className="text-xl font-bold">Teacher</h2>
        {teacher ? <TeacherIcon /> : <StudentIcon />}
      </div>
      <div className="flex py-3 justify-start items-center gap-2">
        <ProfilePic teacher={teacher} />
        <p>Gokul Sharma</p>
      </div>
    </div>
  );
}
