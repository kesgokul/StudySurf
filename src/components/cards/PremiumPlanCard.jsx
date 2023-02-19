import { FaEthereum } from "react-icons/fa";
import { AiFillCheckSquare } from "react-icons/ai";

export default function PremiumPlanCard({
  name,
  features,
  price,
  billing,
  onbuyPremium,
}) {
  return (
    <main className=" w-64 px-4 py-8 bg-black border-2 border-white rounded-xl shadow-2xl snap-center">
      <div className="py-2 border-b border-b-white">
        <p className="text-sm py-1 text-gray-400">{name}</p>
        <div className="flex gap-1">
          <FaEthereum size="25px" color="#323170" />
          <p className="text-xl text-white">
            {`${price}`}
            <span className="ml-1 text-2xs text-gray-400">/month</span>
          </p>
        </div>
      </div>
      {features.map((f) => {
        return (
          <div className="my-5 flex gap-2" key={f}>
            <AiFillCheckSquare size={"15px"} color="white" />
            <p className="text-xs text-white">{f}</p>
          </div>
        );
      })}
      <div className="pt-4 flex justify-center">
        {name !== "Basic" && (
          <button
            onClick={() => onbuyPremium(name)}
            className="px-6 py-2 border border-white text-white rounded-xl focus:bg-white focus:text-black hover:bg-white hover:text-black"
          >
            Subscribe
          </button>
        )}
      </div>
    </main>
  );
}
