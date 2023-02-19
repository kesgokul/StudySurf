import { IoClose } from "react-icons/io5";
import bgSuccess from "/bg-success.png";

export default function PremiumSuccessModal({onClose}) {
  return (
    <>
      <div className="w-full h-inherit bg-black opacity-50 absolute inset-0"></div>
      <div className=" px-6 py-6 w-11/12 h-auto bg-black rounded-xl border-2 border-gray-500 absolute top-36 left-1/2 -translate-x-1/2">
        <IoClose
          onClick={() => onClose()}
          className="ml-auto"
          size="20px"
          color="white"
          cursor={"pointer"}
        />
        <div className="pb-10 w-full h-full bg-success grid justify-center items-center relative isolate z-10">
          <h1 className="my-3 text-3xl font-bold text-green-600 font-righteous">
            Congratulations
          </h1>
          <p className="text-sm text-gray-200">You are now a Premium Member</p>
          <img
            className="absolute inset-0 z-0  "
            src={bgSuccess}
            alt="party poppers"
          />
        </div>
      </div>
    </>
  );
}
