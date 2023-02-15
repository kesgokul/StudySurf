import teacherProfilePic from "/teacher-profile-pic.png";
import studentProfilePic from "/profile-pic.png";

export default function ProfilePic({ picture }) {
  return (
    <img
      className=" w-8 h-8 object-cover object-center rounded-full"
      src={picture ? picture : studentProfilePic}
      alt="profile picture"
    />
  );
}
