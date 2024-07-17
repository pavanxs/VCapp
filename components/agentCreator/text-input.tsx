import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TextInputType = {
  className?: string;
  label?: string;
  infoCustomFill?: string;
  arrowLeftSLine?: string;
  arrowRightSLine?: string;
  infoCustomFill1?: string;
  europeanUnion?: string;
  arrowDownSLine?: string;
  errorWarningFill?: string;

  /** Style props */
  label10AlignSelf?: CSSProperties["alignSelf"];
  label10Flex?: CSSProperties["flex"];
  label10MinWidth?: CSSProperties["minWidth"];
};

const TextInput: NextPage<TextInputType> = ({
  className = "",
  label,
  infoCustomFill,
  arrowLeftSLine,
  arrowRightSLine,
  infoCustomFill1,
  europeanUnion,
  arrowDownSLine,
  errorWarningFill,
  label10AlignSelf,
  label10Flex,
  label10MinWidth,
}) => {
  const textInput10Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: label10AlignSelf,
      flex: label10Flex,
      minWidth: label10MinWidth,
    };
  }, [label10AlignSelf, label10Flex, label10MinWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start gap-[0.25rem] max-w-full text-center text-[0.875rem] text-text-soft-400 font-paragraph-x-small ${className}`}
      style={textInput10Style}
    >
      <header className="flex flex-row items-center justify-start py-[0rem] pr-[37.062rem] pl-[0rem] gap-[0.062rem] text-left text-[0.875rem] text-text-sub-500 font-paragraph-x-small mq450:pr-[1.25rem] mq450:box-border">
        <div className="relative tracking-[-0.01em] leading-[1.25rem] font-medium text-text-main-900 inline-block min-w-[5.375rem] whitespace-nowrap">
          {label}
        </div>
        <div className="self-stretch w-[0.5rem] relative tracking-[-0.01em] leading-[1.25rem] font-medium text-primary-base hidden items-center">
          *
        </div>
        <div className="self-stretch w-[4.063rem] relative tracking-[-0.01em] leading-[1.25rem] hidden items-center">
          (Optional)
        </div>
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
      </header>
      <div className="self-stretch shadow-[0px_1px_2px_rgba(228,_229,_231,_0.24)] rounded-3xs bg-bg-white-0 box-border overflow-hidden flex flex-row items-start justify-center max-w-full border-[1px] border-solid border-stroke-soft-200">
        <div className="flex-1 bg-bg-white-0 box-border overflow-hidden flex flex-row items-center justify-start py-[0.625rem] pr-[0.562rem] pl-[0.687rem] gap-[0.5rem] max-w-full border-r-[1px] border-solid border-stroke-soft-200">
          <div className="relative tracking-[-0.01em] leading-[1.25rem] hidden min-w-[0.563rem]">
            $
          </div>
          <input
            className="w-full [border:none] [outline:none] font-paragraph-x-small text-[0.875rem] bg-[transparent] h-[1.25rem] flex-1 relative tracking-[-0.01em] leading-[1.25rem] text-text-soft-400 text-left inline-block min-w-[15.625rem] max-w-full p-0"
            placeholder="0.00$"
            type="text"
          />
          <img
            className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden min-h-[1.25rem]"
            alt=""
            src={infoCustomFill1}
          />
        </div>
        <div className="self-stretch bg-bg-white-0 overflow-hidden hidden flex-row items-center justify-start py-[0.625rem] pr-[0.5rem] pl-[0.75rem] gap-[0.5rem] text-left text-text-main-900">
          <img
            className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
            alt=""
            src={europeanUnion}
          />
          <div className="self-stretch flex flex-row items-center justify-start gap-[0.125rem]">
            <div className="self-stretch relative tracking-[-0.01em] leading-[1.25rem]">
              EUR
            </div>
            <img
              className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
              alt=""
              src={arrowDownSLine}
            />
          </div>
        </div>
      </div>
      <div className="w-[18.75rem] hidden flex-row items-start justify-start py-[0.125rem] px-[0rem] box-border gap-[0.25rem] text-left text-[0.75rem] text-text-sub-500">
        <img
          className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0"
          alt=""
          src={errorWarningFill}
        />
        <div className="h-[1rem] flex-1 relative leading-[1rem] inline-block whitespace-nowrap">
          This is a hint text to help user.
        </div>
      </div>
    </div>
  );
};

export default TextInput;