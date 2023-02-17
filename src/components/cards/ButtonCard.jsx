export default function ButtonCard({ children, onClick, styles }) {
  return (
    <div
      onClick={() => onClick()}
      className={`w-full h-16 my-8 shadow-md flex items-center justify-around  rounded-xl ${styles}`}
    >
      {children}
    </div>
  );
}
