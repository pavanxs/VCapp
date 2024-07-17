import type { NextPage } from "next";

export type StepIndicatorHorizontalType = {
  className?: string;
};

const StepIndicatorHorizontal: NextPage<StepIndicatorHorizontalType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-full shadow-[0px_1px_2px_rgba(228,_229,_231,_0.24)] rounded-[40px] overflow-hidden flex flex-row items-center justify-center py-[30px] px-5 box-border gap-[20px] leading-[normal] tracking-[normal] text-center text-xs text-text-sub-500 font-paragraph-small mq780:flex-wrap mq780:justify-start ${className}`}
    >
      <div className="flex flex-row items-center justify-start gap-[8px] text-left text-sm">
        <div className="h-5 w-5 rounded-980xl bg-state-success overflow-hidden shrink-0 flex flex-col items-center justify-center p-0.5 box-border">
          <img
            className="w-4 h-4 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/checkline.svg"
          />
        </div>
        <a className="[text-decoration:none] relative tracking-[-0.01em] leading-[20px] text-[inherit] inline-block min-w-[104px]">
          Agent Selection
        </a>
      </div>
      <img
        className="h-5 w-5 relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/arrowrightsline.svg"
      />
      <div className="flex flex-row items-center justify-start gap-[8px] text-bg-white-0">
        <div className="h-5 w-5 rounded-980xl bg-primary-base overflow-hidden shrink-0 flex flex-col items-center justify-center p-0.5 box-border">
          <a className="[text-decoration:none] self-stretch relative leading-[16px] font-medium text-[inherit]">
            2
          </a>
        </div>
        <a className="[text-decoration:none] relative text-sm tracking-[-0.01em] leading-[20px] font-medium text-text-main-900 text-left inline-block min-w-[109px]">
          Configure Agent
        </a>
      </div>
      <img
        className="h-5 w-5 relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/arrowrightsline-1.svg"
      />
      <div className="flex flex-row items-center justify-start gap-[8px]">
        <div className="h-5 w-5 rounded-980xl bg-bg-white-0 box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-0.5 px-px border-[1px] border-solid border-stroke-soft-200">
          <a className="[text-decoration:none] w-4 relative leading-[16px] font-medium text-[inherit] flex items-end justify-center">
            3
          </a>
        </div>
        <a className="[text-decoration:none] relative text-sm tracking-[-0.01em] leading-[20px] text-[inherit] text-left">
          Configure Campaign
        </a>
      </div>
      <img
        className="h-5 w-5 relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/arrowrightsline-2.svg"
      />
      <div className="flex flex-row items-center justify-start gap-[8px]">
        <div className="h-5 w-5 rounded-980xl bg-bg-white-0 box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-0.5 px-px border-[1px] border-solid border-stroke-soft-200">
          <a className="[text-decoration:none] w-4 relative leading-[16px] font-medium text-[inherit] flex items-end justify-center">
            4
          </a>
        </div>
        <a className="[text-decoration:none] relative text-sm tracking-[-0.01em] leading-[20px] text-[inherit] text-left">{`Timeline & Frequency`}</a>
      </div>
    </div>
  );
};

export default StepIndicatorHorizontal;