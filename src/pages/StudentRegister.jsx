import fakeLogo from "/Ellipse.png";
import fakeProfile from "/profile-pic.png";
import StudentForm from "../components/StudentForm";
import { useAuth } from "@arcana/auth";

export default function StudentRegister() {
  const { user } = useAuth();
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-white to-rose-100 flex flex-col justify-between items-center">
      <div className="mb-auto mt-10 px-4 w-full flex justify-between items-center">
        <div className="flex justify-start items-center">
          <img className=" w-14 h-14" src={fakeLogo} alt="logo" />
          <p className="text-black">Splash Screen</p>
        </div>
        <img
          className="w-10 h-10"
          src={user.picture || fakeProfile}
          alt="profile picture"
        />
      </div>
      <h2 className="text-2xl font-semibold">Add you details</h2>
      <StudentForm name={user.name} />
      <p className={"mt-auto text-gray-400"}>
        ©Splash Screen | All rights reserved
      </p>
    </div>
  );
}
