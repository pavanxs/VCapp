import type { NextPage } from "next";
import { Button } from "../ui/button";
import { UploadIcon } from "lucide-react";

export type UploadComponentType = {
  className?: string;
};

const UploadComponent: NextPage<UploadComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start gap-[0.25rem] max-w-full text-center text-[0.875rem] text-text-main-900 font-paragraph-x-small ${className}`}
    >
      
      <div className="self-stretch rounded-xl bg-bg-white-0 overflow-hidden flex flex-col items-center justify-center py-[1.875rem] px-[1.937rem] gap-[1.25rem] border-[1px] border-dashed border-stroke-sub-300">
        <UploadIcon />
        <div className="self-stretch flex flex-col items-center justify-start gap-[0.25rem]">
          <div className="self-stretch relative tracking-[-0.01em] leading-[1.25rem] font-medium">{`Choose a file or drag & drop it here.`}</div>
          <div className="self-stretch relative text-[0.75rem] leading-[1rem] text-text-soft-400">
            PDF, and CSV formats, up to 50 MB.
          </div>
        </div>
        <Button variant="outline">Browse File</Button>
      </div>
      
    </section>
  );
};

export default UploadComponent;