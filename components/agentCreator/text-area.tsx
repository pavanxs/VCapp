import type { NextPage } from "next";

export type TextArea1Type = {
  className?: string;
};

const TextArea1: NextPage<TextArea1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start gap-[0.25rem] max-w-full text-center text-[0.875rem] text-text-main-900 font-paragraph-x-small ${className}`}
    >
      <footer className="flex flex-row items-center justify-start py-[0rem] pr-[36.75rem] pl-[0rem] gap-[0.062rem] text-left text-[0.875rem] text-text-sub-500 font-paragraph-x-small mq450:pr-[1.25rem] mq450:box-border mq675:flex-wrap">
        <div className="relative tracking-[-0.01em] leading-[1.25rem] font-medium text-text-main-900 inline-block min-w-[5.125rem]">
          Upload Data
        </div>
        <div className="relative tracking-[-0.01em] leading-[1.25rem] font-medium text-primary-base inline-block min-w-[0.5rem] mq675:w-full mq675:h-[0.5rem]">
          *
        </div>
        <div className="self-stretch w-[4.063rem] relative tracking-[-0.01em] leading-[1.25rem] hidden items-center">
          (Optional)
        </div>
        <img
          className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
          loading="lazy"
          alt=""
          src="/infocustomfill-8.svg"
        />
        <div className="h-[1rem] w-[5.375rem] hidden flex-row items-center justify-end gap-[0.25rem] text-right text-[0.75rem]">
          <img
            className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 hidden min-h-[1rem]"
            alt=""
            src="/arrowleftsline.svg"
          />
          <div className="self-stretch relative leading-[1rem] font-medium">
            Help?
          </div>
          <img
            className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 hidden min-h-[1rem]"
            alt=""
            src="/arrowrightsline.svg"
          />
        </div>
      </footer>
      <div className="self-stretch rounded-xl bg-bg-white-0 overflow-hidden flex flex-col items-center justify-center py-[1.875rem] px-[1.937rem] gap-[1.25rem] border-[1px] border-dashed border-stroke-sub-300">
        <img
          className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/uploadcloud2line.svg"
        />
        <div className="self-stretch flex flex-col items-center justify-start gap-[0.25rem]">
          <div className="self-stretch relative tracking-[-0.01em] leading-[1.25rem] font-medium">{`Choose a file or drag & drop it here.`}</div>
          <div className="self-stretch relative text-[0.75rem] leading-[1rem] text-text-soft-400">
            PDF, and CSV formats, up to 50 MB.
          </div>
        </div>
        <div className="shadow-[0px_1px_2px_rgba(82,_88,_102,_0.06)] rounded-lg bg-bg-white-0 overflow-hidden flex flex-row items-center justify-center py-[0.25rem] px-[0.937rem] gap-[0.125rem] text-text-sub-500 border-[1px] border-solid border-stroke-soft-200">
          <img
            className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden min-h-[1.25rem]"
            alt=""
            src="/arrowleftsline.svg"
          />
          <div className="flex flex-row items-center justify-center py-[0rem] px-[0.25rem]">
            <div className="relative tracking-[-0.01em] leading-[1.25rem] font-medium inline-block min-w-[4.75rem]">
              Browse File
            </div>
          </div>
          <img
            className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden min-h-[1.25rem]"
            alt=""
            src="/arrowrightsline.svg"
          />
        </div>
      </div>
      <div className="w-[25rem] hidden flex-row flex-wrap items-start justify-start py-[0.125rem] px-[0rem] box-border gap-[0.25rem] max-w-full text-left text-[0.75rem] text-text-sub-500">
        <img
          className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0"
          alt=""
          src="/errorwarningfill-6.svg"
        />
        <div className="h-[1rem] flex-1 relative leading-[1rem] inline-block min-w-[15.438rem] max-w-full">
          This is a hint text to help user.
        </div>
      </div>
    </section>
  );
};

export default TextArea1;