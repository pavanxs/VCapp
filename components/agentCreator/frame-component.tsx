import type { NextPage } from "next";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-[0.25rem] max-w-full text-left text-[0.875rem] text-text-sub-500 font-paragraph-x-small ${className}`}
    >
      <div className="flex flex-row items-center justify-start py-[0rem] pr-[37.125rem] pl-[0rem] gap-[0.062rem] mq450:pr-[1.25rem] mq450:box-border mq675:flex-wrap">
        <div className="relative tracking-[-0.01em] leading-[1.25rem] font-medium text-text-main-900 inline-block min-w-[4.75rem]">
          Description
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
          src="/infocustomfill-5.svg"
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
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0.75rem] max-w-full text-text-main-900">
        <div className="flex-1 rounded-xl bg-bg-white-0 box-border flex flex-row items-start justify-start py-[0.875rem] px-[0.937rem] gap-[0.875rem] min-w-[14rem] max-w-full border-[1px] border-solid border-primary-base">
          <div className="h-[2.5rem] w-[2.5rem] shadow-[0px_1px_2px_rgba(228,_229,_231,_0.24)] rounded-77xl bg-bg-white-0 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.625rem] px-[0.562rem] border-[1px] border-solid border-stroke-soft-200">
            <img
              className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/phoneline.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.25rem]">
              <div className="relative tracking-[-0.01em] leading-[1.25rem] font-medium whitespace-pre-wrap inline-block min-w-[5.688rem]">
                Sales Ageent
              </div>
              <div className="w-[3.625rem] relative text-[0.75rem] leading-[1rem] text-text-sub-500 hidden">
                (Sublabel)
              </div>
              <div className="h-[1rem] rounded-radius-full bg-blue-light overflow-hidden hidden flex-row items-center justify-center py-[0.125rem] px-[0.5rem] box-border text-center text-[0.688rem] text-blue-darker">
                <div className="self-stretch relative tracking-[0.02em] leading-[0.75rem] uppercase font-medium">
                  new
                </div>
              </div>
            </div>
            <div className="self-stretch relative text-[0.75rem] leading-[1rem] text-text-sub-500">
              Receive a one-time verification code via SMS to enter during
              login.
            </div>
          </div>
          <div className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0">
            <div className="absolute h-4/5 w-4/5 top-[10%] right-[10%] bottom-[10%] left-[10%] shadow-[0px_2px_2px_rgba(22,_38,_100,_0.32)_inset] rounded-77xl bg-primary-base box-border border-t-[1px] border-solid border-primary-dark" />
            <div className="absolute h-2/5 w-2/5 top-[30%] right-[30%] bottom-[30%] left-[30%] shadow-[0px_-2px_3px_#d0d1d3_inset,_0px_2px_2px_rgba(27,_28,_29,_0.12)] rounded-77xl bg-bg-white-0 box-border z-[1] border-[1px] border-solid border-bg-white-0" />
          </div>
        </div>
        <div className="flex-1 shadow-[0px_1px_2px_rgba(228,_229,_231,_0.24)] rounded-xl bg-bg-white-0 box-border flex flex-row items-start justify-start py-[0.875rem] px-[0.937rem] gap-[0.875rem] min-w-[14rem] max-w-full border-[1px] border-solid border-stroke-soft-200">
          <div className="h-[2.5rem] w-[2.5rem] shadow-[0px_1px_2px_rgba(228,_229,_231,_0.24)] rounded-77xl bg-bg-white-0 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.625rem] px-[0.562rem] border-[1px] border-solid border-stroke-soft-200">
            <img
              className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/whatsappline.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.25rem]">
              <div className="relative tracking-[-0.01em] leading-[1.25rem] font-medium inline-block min-w-[7.688rem]">
                Customer Support
              </div>
              <div className="w-[3.625rem] relative text-[0.75rem] leading-[1rem] text-text-sub-500 hidden">
                (Sublabel)
              </div>
              <div className="h-[1rem] rounded-radius-full bg-blue-light overflow-hidden hidden flex-row items-center justify-center py-[0.125rem] px-[0.5rem] box-border text-center text-[0.688rem] text-blue-darker">
                <div className="self-stretch relative tracking-[0.02em] leading-[0.75rem] uppercase font-medium">
                  new
                </div>
              </div>
            </div>
            <div className="self-stretch relative text-[0.75rem] leading-[1rem] text-text-sub-500">
              Use an authenticator app to generate time-based verification codes
              for login.
            </div>
          </div>
          <div className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0">
            <div className="absolute h-4/5 w-4/5 top-[10%] right-[10%] bottom-[10%] left-[10%] rounded-77xl bg-stroke-soft-200" />
            <div className="absolute h-[65%] w-[65%] top-[17.5%] right-[17.5%] bottom-[17.5%] left-[17.5%] shadow-[0px_2px_2px_rgba(27,_28,_29,_0.12)] rounded-77xl bg-bg-white-0 z-[1]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;