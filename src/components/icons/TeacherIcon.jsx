import teacherIcon from "/teacher.png";


export default function TeacherIcon({ styles }) {
  return (
    <img
      className={` w-6 h-6 ${styles}`}
      src={teacherIcon}
      alt="icon of a teacher"
    />
  );
}
