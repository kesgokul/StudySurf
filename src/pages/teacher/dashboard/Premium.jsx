import DashLayout from "../../../components/layout/DashLayout";
import TeacherIcon from "../../../components/icons/TeacherIcon";
import UserContext from "../../../context/userContext";
import ProfilePic from "../../../components/icons/ProfilePic";
import PremiumPlanCard from "../../../components/cards/PremiumPlanCard";
import PremiumSuccessModal from "../../../components/cards/modals/PremiumSuccessModal";

import { BsStars } from "react-icons/bs";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
import { useCallback, useContext, useState } from "react";
import { premiumPlans } from "../../../fakeData";

import { useEffect } from "react";
import { useAuth, useProvider } from "@arcana/auth-react";
import { ethers } from "ethers";
import STUDYSURFPREMIUM_ABI from "../../../../constants/studySurfPremium.json";
import { studySurfPremiumAddress } from "../../../../constants/contractAddresses";
import {
  STANDARD_PRICE,
  ENTERPRISE_PRICE,
} from "../../../../constants/planConfig";
// import { EthereumProvider } from "@arcana/auth";

export default function Premium() {
  const [txSuccess, setTxSuccess] = useState(false);
  const [yearlyPlan, setYearlyPlan] = useState(false);
  const { userData } = useContext(UserContext);
  const { isLoggedIn } = useAuth();
  const { provider } = useProvider();
  let ssPremiumContract;

  // function to call the StudySurfPremium contract to subscribe to a plan
  const buyPremium = useCallback(
    async (plan) => {
      if (!isLoggedIn) {
        console.log("user not logged In");
        return;
      }

      const planId = plan === "Enterprise" ? 2 : 1;
      const value = plan === "Enterprise" ? ENTERPRISE_PRICE : STANDARD_PRICE;

      // ssPremiumContract.on("Subscribed")
      try {
        const tx = await ssPremiumContract.subscribe(planId, {
          value: value,
          gasLimit: 20000000,
        });
        const txReceipt = await tx.wait(1);
        console.log(tx);
        console.log(txReceipt);

        if (txReceipt.status === 1) {
          setTxSuccess(true);
        }
      } catch (error) {
        console.log(error);
      }
    },
    [isLoggedIn]
  );

  useEffect(() => {
    if (isLoggedIn) {
      async function createContractInstance() {
        const web3Provider = new ethers.providers.Web3Provider(provider);
        const signer = web3Provider.getSigner();
        // const code = await web3Provider.getCode(studySurfPremiumAddress);
        ssPremiumContract = new ethers.Contract(
          studySurfPremiumAddress,
          STUDYSURFPREMIUM_ABI,
          signer
        );
      }
      createContractInstance();
    }
  }, [isLoggedIn]);

  console.log(isLoggedIn);

  return (
    <DashLayout>
      {txSuccess && <PremiumSuccessModal onClose={() => setTxSuccess(false)} />}
      <main className=" mt-10 pt-4 w-full h-full  bg-black rounded-t-xl">
        <div className="p-4  flex items-center gap-4">
          <h2 className="text-xl font-bold text-transparent bg-gold-gradient bg-clip-text bg-lg bg-right-bottom">
            Premium
          </h2>
          <BsStars size={"25px"} color="#605100" />
          <TeacherIcon styles="ml-auto" />
          <HiQuestionMarkCircle size={"25px"} color="gray" />
        </div>
        <section className=" h-full bg-green-gradient rounded-t-xl">
          <div className=" p-4 flex items-center gap-2 ">
            <ProfilePic picture={userData.picture} />
            <h2 className="text-2xl font-bold text-white uppercase">
              {userData.name}
            </h2>
            <p className="ml-auto bg-gray-300 text-red-500 text-2xs p-0.5 border border-red-500">
              {userData.classCode}
            </p>
          </div>
          <div className="pb-10 mx-4 flex justify-center items-center gap-4 border-b border-gray-400">
            <GrMail size="15px" color="gray" />
            <p className="text-sm text-gray-200">{userData.email}</p>
          </div>
          <article className="mt-8 flex flex-col items-center">
            <h2 className=" gap-2 uppercase text-xl text-white">
              It's easy to get started
            </h2>
            <p className="text-xs text-gray-400">
              Choose a plan tailored to your needs
            </p>
            <div className="my-10">
              <button
                onClick={() => setYearlyPlan((s) => !s)}
                className={`px-4 py-2 rounded-l-xl border ${
                  !yearlyPlan
                    ? "bg-white text-black"
                    : "bg-transparent text-white"
                } `}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearlyPlan((s) => !s)}
                className={`px-4 py-2 border rounded-r-xl ${
                  yearlyPlan
                    ? "bg-white text-black"
                    : "bg-transparent text-white"
                } `}
              >
                Yearly
              </button>
            </div>
          </article>
          <article className="mb-32 px-10 w-full overflow-x-scroll snap-x grid grid-flow-col gap-20">
            {premiumPlans.map((p) => {
              return (
                <PremiumPlanCard
                  key={p.price}
                  name={p.name}
                  features={p.features}
                  price={p.price}
                  onbuyPremium={buyPremium}
                />
              );
            })}
          </article>
        </section>
      </main>
    </DashLayout>
  );
}
