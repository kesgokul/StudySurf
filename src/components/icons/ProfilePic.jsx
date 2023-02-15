import teacherProfilePic from "/teacher-profile-pic.png";
import studentProfilePic from "/profile-pic.png";

export default function ProfilePic({ teacher }) {
  return (
    <img
      className="w-10 h-10"
      src={teacher ? teacherProfilePic : studentProfilePic}
      alt="profile picture"
    />
  );
}
