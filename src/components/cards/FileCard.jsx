import { BsPatchCheckFill } from "react-icons/bs";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { formatDate } from "../../utils/helperFuncitons";

export default function FileCard({ name, date, file }) {
  return (
    <div className="w-full px-2 bg-card-gradient-1 rounded-b-xl underline-offset-2 relative isolate">
      <BsPatchCheckFill
        className="absolute top-0 right-0 translate-x-2 -translate-y-2 bg-green"
        color="rgb(34, 197, 94)"
        size="30px"
      />
      <div className="flex gap-1 items-center">
        <IoMdCheckmarkCircle size={"20px"} color="green" />
        <p className="text-sm  py-1 underline ">{name}</p>
      </div>
      <time className=" ml-6 text-2xs pb-1">{`Submission date: ${formatDate(
        date
      )}`}</time>
      <figure className="w-4/5 mt-2 mx-auto relative isolate ">
        <img
          className="w-full rounded-t-xl blur-2xs"
          src={file}
          alt="thumbnail of the assignment file"
        />
        <button className=" px-3 py-1.5 absolute bottom-6 left-1/2 -translate-x-1/2 bg-input-orange text-white rounded-2xl">
          Tap to open
        </button>
      </figure>
    </div>
  );
}
