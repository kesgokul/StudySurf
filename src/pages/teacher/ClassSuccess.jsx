import successImage from "/success.png";
import RegisterLayout from "../../components/layout/RegisterLayout";
import {
  HiOutlineClipboardDocument,
  HiOutlineClipboardDocumentCheck,
} from "react-icons/hi2";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ClassSuccess() {
  const [codeCopied, setCodeCopied] = useState(false);

  async function copyToClipboard() {
    await navigator.clipboard.write("Code");
  }

  return (
    <RegisterLayout>
      <img className=" w-32" src={successImage} alt="green check mark" />
      <h1 className="mb-2 text-2xl text-green-600">Success</h1>
      <p className=" w-3/4 text-xs text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolor
        incidunt fugit deserunt atque culpa id ratione suscipit quis illo!
      </p>
      <div className="mt-20 px-2 w-3/4 max-w-md h-16 flex justify-around items-center bg-button-yellow text-button-text-green rounded-xl">
        <p className="text-lg font-bold">CHEM-II-2023-D</p>
        {!codeCopied ? (
          <HiOutlineClipboardDocument
            onClick={() => {
              copyToClipboard();
              setCodeCopied(true);
            }}
            size={"30px"}
            cursor="pointer"
          />
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <HiOutlineClipboardDocumentCheck size={"30px"} />
          </motion.div>
        )}
      </div>
      <button className="my-10 px-2 w-3/4 max-w-md h-16 flex justify-center gap-6 font-bold items-center bg-button-green text-white rounded-xl hover:bg-green-500">
        <span>Dashboard</span>
        {"\u27F6"}
      </button>
    </RegisterLayout>
  );
}