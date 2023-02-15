import DashLayout from "../../../components/layout/DashLayout";
import fakePdf from "/fake.pdf";
import { useState } from "react";
import { thumbnailPlugin } from "@react-pdf-viewer/thumbnail";
import "@react-pdf-viewer/thumbnail/lib/styles/index.css";

import { Viewer } from "@react-pdf-viewer/core";

export default function Submissions() {
  const [pdfThumb, setPdfThumb] = useState("");
  const thumbnailPluginInstance = thumbnailPlugin({ thumbnailWidth: 100 });

  return (
    <DashLayout>
      <div className="w-full h-full bg-white flex justify-center bg-card-gradient rounded-xl">
        <Viewer plugins={[thumbnailPluginInstance]} fileUrl={"/fake.pdf"} />
      </div>
    </DashLayout>
  );
}
