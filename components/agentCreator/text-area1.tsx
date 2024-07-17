import type { NextPage } from "next";

export type TextAreaType = {
  className?: string;
  label?: string;
  infoCustomFill?: string;
  arrowLeftSLine?: string;
  arrowRightSLine?: string;
  resize?: string;
  errorWarningFill?: string;
  showOptional?: boolean;
};

const TextArea: NextPage<TextAreaType> = ({
  className = "",
  label,
  infoCustomFill,
  arrowLeftSLine,
  arrowRightSLine,
  resize,
  errorWarningFill,
  showOptional,
}) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start gap-[0.25rem] max-w-full text-left text-[0.875rem] text-text-sub-500 font-paragraph-x-small ${className}`}
    >
      <div className="flex flex-row items-center justify-start py-[0rem] pr-[30.437rem] pl-[0rem] gap-[0.062rem] mq450:pr-[1.25rem] mq450:box-border mq675:flex-wrap">
        <div className="relative tracking-[-0.01em] leading-[1.25rem] font-medium text-text-main-900 inline-block min-w-[7.313rem]">
          {label}
        </div>
        <div className="relative tracking-[-0.01em] leading-[1.25rem] font-medium text-primary-base inline-block min-w-[0.5rem] mq675:w-full mq675:h-[0.5rem]">
          *
        </div>
        {showOptional && (
          <div className="relative tracking-[-0.01em] leading-[1.25rem] inline-block min-w-[4.063rem]">
            (Optional)
          </div>
        )}
        <img
          className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
          loading="lazy"
          alt=""
          src={infoCustomFill}
        />
        <div className="h-[1rem] w-[5.375rem] hidden flex-row items-center justify-end gap-[0.25rem] text-right text-[0.75rem]">
          <img
            className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 hidden min-h-[1rem]"
            alt=""
            src={arrowLeftSLine}
          />
          <div className="self-stretch relative leading-[1rem] font-medium">
            Help?
          </div>
          <img
            className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 hidden min-h-[1rem]"
            alt=""
            src={arrowRightSLine}
          />
        </div>
      </div>
      <div className="self-stretch shadow-[0px_1px_2px_rgba(228,_229,_231,_0.24)] rounded-xl bg-bg-white-0 overflow-hidden flex flex-col items-start justify-start py-[0.625rem] px-[0.687rem] gap-[0.5rem] text-text-soft-400 border-[1px] border-solid border-stroke-soft-200">
        <div className="self-stretch h-[1.75rem] relative tracking-[-0.01em] leading-[1.25rem] inline-block">
          The message you wish to send to the recipient...
        </div>
        <div className="self-stretch flex flex-row items-center justify-end py-[0rem] pr-[0rem] pl-[39.062rem] gap-[0.312rem] text-right text-[0.688rem] mq450:pl-[1.25rem] mq450:box-border mq675:pl-[19.5rem] mq675:box-border">
          <div className="relative tracking-[0.02em] leading-[0.75rem] uppercase font-medium inline-block min-w-[2.125rem]">
            0/200
          </div>
          <img
            className="h-[0.75rem] w-[0.75rem] relative min-h-[0.75rem]"
            loading="lazy"
            alt=""
            src={resize}
          />
        </div>
      </div>
      <div className="w-[25rem] hidden flex-row flex-wrap items-start justify-start py-[0.125rem] px-[0rem] box-border gap-[0.25rem] max-w-full text-[0.75rem]">
        <img
          className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0"
          alt=""
          src={errorWarningFill}
        />
        <div className="h-[1rem] flex-1 relative leading-[1rem] inline-block min-w-[15.438rem] max-w-full">
          This is a hint text to help user.
        </div>
      </div>
    </section>
  );
};

export default TextArea;