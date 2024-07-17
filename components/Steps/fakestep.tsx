import type { NextPage } from "next";

export type RootType = {
  className?: string;
};

const Root: NextPage<RootType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full flex flex-row items-start justify-start gap-[24px] leading-[normal] tracking-[normal] text-center text-sm text-icon-soft-400 font-label-small mq700:flex-wrap ${className}`}
    >
      <div className="w-[258px] shadow-[0px_1px_2px_rgba(228,_229,_231,_0.24)] rounded-2xl bg-bg-white-0 box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-2 px-[9px] gap-[8px] min-w-[258px] border-[1px] border-solid border-stroke-soft-200 mq700:flex-1">
        <div className="self-stretch flex flex-row items-center justify-center pt-1.5 px-2 pb-1 text-left text-xs">
          <div className="flex-1 relative tracking-[0.04em] leading-[16px] uppercase font-medium">
            SELECT MENU
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-bg-white-0 flex flex-row items-center justify-start p-2 relative gap-[6px] text-2xs text-bg-white-0">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
            alt=""
            src="/equalizerline.svg"
          />
          <input
            className="w-[calc(100%_-_36px)] [border:none] [outline:none] bg-[transparent] h-5 flex-1 flex flex-row items-center justify-start font-label-small font-medium text-sm text-text-sub-500 min-w-[118px]"
            placeholder="Preferences"
            type="text"
          />
          <div className="rounded-980xl bg-red-base overflow-hidden hidden flex-row items-center justify-center p-0.5 z-[2]">
            <div className="h-3 w-3 relative tracking-[0.02em] leading-[12px] uppercase font-medium inline-block shrink-0">
              2
            </div>
          </div>
          <div className="h-5 w-5 rounded-3xl bg-bg-white-0 overflow-hidden shrink-0 hidden flex-row items-start justify-start z-[3]">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/arrowrightsline.svg"
            />
          </div>
          <div className="h-0.5 w-full absolute !m-[0] right-[0px] bottom-[-14px] left-[0px] bg-primary-base hidden z-[4]" />
        </div>
        <div className="self-stretch rounded-lg bg-bg-white-0 flex flex-row items-center justify-start p-2 relative gap-[6px] text-text-sub-500">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
            alt=""
            src="/notification05line.svg"
          />
          <div className="flex-1 flex flex-row items-center justify-start">
            <a className="[text-decoration:none] w-[52px] relative tracking-[-0.01em] leading-[20px] font-medium text-[inherit] inline-block min-w-[52px]">
              Method
            </a>
          </div>
          <div className="rounded-980xl bg-red-base overflow-hidden hidden flex-row items-center justify-center p-0.5 z-[2] text-2xs text-bg-white-0">
            <div className="h-3 w-3 relative tracking-[0.02em] leading-[12px] uppercase font-medium inline-block shrink-0">
              2
            </div>
          </div>
          <div className="h-5 w-5 rounded-3xl bg-bg-white-0 overflow-hidden shrink-0 hidden flex-row items-start justify-start z-[3]">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/arrowrightsline-1.svg"
            />
          </div>
          <div className="h-0.5 w-full absolute !m-[0] right-[0px] bottom-[-14px] left-[0px] bg-primary-base hidden z-[4]" />
        </div>
        <div className="self-stretch rounded-lg bg-bg-weak-100 flex flex-row items-center justify-start p-2 gap-[6px] text-text-main-900">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
            loading="lazy"
            alt=""
            src="/settingsline.svg"
          />
          <div className="flex-1 flex flex-row items-center justify-start">
            <a className="[text-decoration:none] relative tracking-[-0.01em] leading-[20px] font-medium text-[inherit] inline-block min-w-[67px]">
              Advanced
            </a>
          </div>
          <div className="rounded-980xl bg-red-base overflow-hidden hidden flex-row items-center justify-center p-0.5 text-2xs text-bg-white-0">
            <div className="h-3 w-3 relative tracking-[0.02em] leading-[12px] uppercase font-medium inline-block shrink-0">
              2
            </div>
          </div>
          <div className="h-5 w-5 shadow-[0px_2px_4px_rgba(27,_28,_29,_0.04)] rounded-3xl bg-bg-white-0 overflow-hidden shrink-0 flex flex-row items-start justify-start">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/arrowrightsline-2.svg"
            />
          </div>
        </div>
      </div>
      <section className="flex-1 shadow-[0px_1px_2px_rgba(228,_229,_231,_0.24)] rounded-[20px] bg-bg-white-0 box-border overflow-hidden flex flex-col items-center justify-start min-w-[393px] max-w-full text-left text-lg text-text-main-900 font-label-small border-[1px] border-solid border-stroke-soft-200 mq450:min-w-full">
        <div className="self-stretch bg-bg-white-0 box-border flex flex-col items-start justify-start pt-4 px-4 pb-3.5 gap-[16px] max-w-full border-b-[1px] border-solid border-stroke-soft-200">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[97px] pl-0 box-border gap-[14px] max-w-full mq450:pr-5 mq450:box-border mq650:flex-wrap mq650:pr-12 mq650:box-border">
            <div className="h-12 w-12 rounded-[96px] bg-bg-weak-100 overflow-hidden shrink-0 flex flex-row items-center justify-center p-3 box-border">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/settings2line.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[269px] max-w-full">
              <a className="[text-decoration:none] self-stretch relative tracking-[-0.01em] leading-[24px] font-medium text-[inherit]">
                Settings Page
              </a>
              <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[20px] text-text-sub-500">
                Manage your preferences and configure various options.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[4px] max-w-full text-sm text-text-sub-500">
            <div className="w-[400px] hidden flex-row items-center justify-start gap-[1px] max-w-full mq450:flex-wrap">
              <div className="relative tracking-[-0.01em] leading-[20px] font-medium text-text-main-900">
                Description
              </div>
              <div className="relative tracking-[-0.01em] leading-[20px] font-medium text-primary-base mq450:w-full mq450:h-2">
                *
              </div>
              <div className="relative tracking-[-0.01em] leading-[20px]">
                (Optional)
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                alt=""
                src="/infocustomfill.svg"
              />
              <div className="h-4 w-[86px] hidden flex-row items-center justify-end gap-[4px] text-right text-xs">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
                  alt=""
                  src="/arrowleftsline.svg"
                />
                <div className="self-stretch relative leading-[16px] font-medium">
                  Help?
                </div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
                  alt=""
                  src="/arrowrightsline.svg"
                />
              </div>
            </div>
            <div className="self-stretch shadow-[0px_1px_2px_rgba(228,_229,_231,_0.24)] rounded-xl bg-bg-white-0 overflow-hidden flex flex-col items-start justify-start py-2.5 px-[11px] gap-[8px] text-icon-soft-400 border-[1px] border-solid border-stroke-soft-200">
              <div className="self-stretch h-[271px] relative tracking-[-0.01em] leading-[20px] inline-block">
                The message you wish to send to the recipient...
              </div>
              <div className="self-stretch flex flex-row items-center justify-end py-0 pr-0 pl-[498px] gap-[5px] text-right text-2xs mq450:pl-5 mq450:box-border mq650:pl-[249px] mq650:box-border">
                <div className="relative tracking-[0.02em] leading-[12px] uppercase font-medium inline-block min-w-[34px]">
                  0/200
                </div>
                <img
                  className="h-3 w-3 relative min-h-[12px]"
                  loading="lazy"
                  alt=""
                  src="/resize.svg"
                />
              </div>
            </div>
            <div className="w-[400px] hidden flex-row items-start justify-start py-0.5 px-0 box-border gap-[4px] max-w-full text-xs mq450:flex-wrap">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src="/errorwarningfill.svg"
              />
              <div className="h-4 flex-1 relative leading-[16px] inline-block min-w-[247px] max-w-full">
                This is a hint text to help user.
              </div>
            </div>
          </div>
          <div className="self-stretch bg-bg-white-0 flex flex-row items-start justify-start gap-[16px] mq650:flex-wrap">
            <button className="cursor-pointer py-1.5 px-5 bg-bg-white-0 flex-1 shadow-[0px_1px_2px_rgba(82,_88,_102,_0.06)] rounded-lg box-border overflow-hidden flex flex-row items-center justify-center gap-[4px] min-w-[181px] border-[1px] border-solid border-stroke-soft-200">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                alt=""
                src="/arrowleftsline.svg"
              />
              <div className="flex flex-row items-center justify-center py-0 px-1">
                <div className="relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-label-small text-text-sub-500 text-center inline-block min-w-[33px]">
                  Back
                </div>
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                alt=""
                src="/arrowrightsline.svg"
              />
            </button>
            <button className="cursor-pointer [border:none] py-2 px-5 bg-primary-base flex-1 shadow-[0px_1px_2px_rgba(55,_93,_251,_0.08)] rounded-lg overflow-hidden flex flex-row items-center justify-center box-border gap-[4px] min-w-[181px]">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                alt=""
                src="/arrowleftsline.svg"
              />
              <div className="flex flex-row items-center justify-center py-0 px-1">
                <div className="relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-label-small text-bg-white-0 text-center inline-block min-w-[32px]">
                  Next
                </div>
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                alt=""
                src="/arrowrightsline.svg"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Root;