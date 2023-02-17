import studentIcon from "/Man Student.png";


export default function StudentIcon({ styles }) {
  return (
    <img
      className={` w-6 h-6 ${styles}`}
      src={studentIcon}
      alt="icon of a teacher"
    />
  );
}
