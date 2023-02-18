export default function ButtonCard({ children, onClick, styles }) {
  return (
    <div
      onClick={() => onClick()}
      className={`w-full h-auto min-h-16 my-8 shadow-md flex items-center justify-around  rounded-xl transition-all ease-in-out cursor-pointer ${styles}`}
    >
      {children}
    </div>
  );
}
