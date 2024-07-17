import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-[0.25rem] max-w-full text-left text-[0.875rem] text-text-sub-500 font-paragraph-x-small ${className}`}
    >
      <div className="flex flex-row items-center justify-start py-[0rem] pr-[39.562rem] pl-[0rem] gap-[0.062rem] mq450:pr-[1.25rem] mq450:box-border mq675:flex-wrap">
        <div className="relative tracking-[-0.01em] leading-[1.25rem] font-medium text-text-main-900 inline-block min-w-[2.313rem]">
          Voice
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
          src="/infocustomfill-4.svg"
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
      <div className="self-stretch flex flex-row items-start justify-start max-w-full text-text-main-900">
        <div className="flex-1 rounded-2xl bg-bg-weak-100 flex flex-row items-start justify-start p-[1rem] box-border gap-[1rem] max-w-full mq625:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.562rem] min-w-[14rem] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.812rem] gap-[0.25rem]">
              <div className="self-stretch relative tracking-[-0.01em] leading-[1.375rem] font-medium">
                Selected Voice
              </div>
              <div className="self-stretch relative text-[0.75rem] leading-[1rem] text-text-sub-500">
                Use an authenticator app to generate time-based verification
                codes for login.
              </div>
            </div>
            <div className="shadow-[0px_1px_2px_rgba(82,_88,_102,_0.06)] rounded-lg bg-bg-white-0 overflow-hidden flex flex-row items-center justify-center py-[0.375rem] px-[2.375rem] gap-[0.25rem] text-center text-text-sub-500 border-[1px] border-solid border-stroke-soft-200">
              <img
                className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden min-h-[1.25rem]"
                alt=""
                src="/arrowleftsline.svg"
              />
              <div className="flex flex-row items-center justify-center py-[0rem] px-[0.25rem]">
                <div className="relative tracking-[-0.01em] leading-[1.25rem] font-medium inline-block min-w-[5.75rem]">
                  Change Voice
                </div>
              </div>
              <img
                className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden min-h-[1.25rem]"
                alt=""
                src="/arrowrightsline.svg"
              />
            </div>
          </div>
          <div className="w-[19.25rem] shadow-[0px_1px_2px_rgba(228,_229,_231,_0.24)] rounded-xl bg-bg-white-0 box-border flex flex-row items-center justify-center py-[0.875rem] px-[0.937rem] gap-[0.875rem] min-w-[19.25rem] text-[0.75rem] text-orange-darker border-[1px] border-solid border-stroke-soft-200 mq625:flex-1">
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
              <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="flex flex-row items-start justify-start gap-[0.25rem] text-center">
                    <div className="rounded-980xl bg-orange-light overflow-hidden flex flex-row items-center justify-center py-[0.125rem] px-[0.5rem]">
                      <a className="[text-decoration:none] relative leading-[1rem] font-medium text-[inherit] inline-block min-w-[2.625rem]">
                        English
                      </a>
                    </div>
                    <div className="rounded-980xl bg-purple-light overflow-hidden flex flex-row items-center justify-center py-[0.125rem] px-[0.5rem] text-purple-darker">
                      <div className="relative leading-[1rem] font-medium inline-block min-w-[2.688rem]">
                        Upbeat
                      </div>
                    </div>
                    <div className="rounded-980xl bg-orange-light overflow-hidden flex flex-row items-center justify-center py-[0.125rem] px-[0.5rem] whitespace-nowrap">
                      <div className="relative leading-[1rem] font-medium inline-block min-w-[4.563rem]">
                        Social Media
                      </div>
                    </div>
                  </div>
                  <div className="relative text-[0.875rem] tracking-[-0.01em] leading-[1.25rem] font-semibold text-text-main-900">
                    Archie - English teen youth
                  </div>
                  <div className="relative leading-[1rem] font-medium text-text-sub-500">
                    Young male with British accent
                  </div>
                </div>
                <div className="w-[2.25rem] shadow-[0px_1px_2px_rgba(82,_88,_102,_0.06)] rounded-lg bg-bg-white-0 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.375rem] px-[0.437rem] gap-[0.25rem] border-[1px] border-solid border-stroke-soft-200">
                  <img
                    className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden min-h-[1.25rem]"
                    alt=""
                    src="/arrowleftsline.svg"
                  />
                  <img
                    className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/headphoneline.svg"
                  />
                  <img
                    className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden min-h-[1.25rem]"
                    alt=""
                    src="/arrowrightsline.svg"
                  />
                </div>
              </div>
              <div className="self-stretch relative leading-[1rem] text-text-soft-400">
                Devi is the pen name of a young Indian female Receive a one-time
                verification code via sms t...
              </div>
            </div>
            <div className="h-[3.75rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden">
              <div className="absolute h-[26.67%] w-4/5 top-[36.67%] right-[10%] bottom-[36.67%] left-[10%] rounded-77xl bg-stroke-soft-200" />
              <div className="absolute h-[21.67%] w-[65%] top-[39.17%] right-[17.5%] bottom-[39.17%] left-[17.5%] shadow-[0px_2px_2px_rgba(27,_28,_29,_0.12)] rounded-77xl bg-bg-white-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;