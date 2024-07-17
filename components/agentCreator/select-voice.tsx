import type { NextPage } from "next";
import { Button } from "../ui/button";
import { FileVolume2, Info } from "lucide-react";
import { Badge } from "../ui/badge";
import { Label } from "../ui/label";

export type SelectVoiceType = {
  className?: string;
};

const SelectVoice: NextPage<SelectVoiceType> = ({ className = "" }) => {
  return (

    <section  className="self-stretch flex flex-col items-start justify-start gap-[0.25rem] max-w-full text-left text-[0.875rem] text-text-sub-500 font-paragraph-x-small"
    >
      {/* Hea */}
      <div className=" flex flex-row gap-1  items-center">
        <Label htmlFor="Name">Select Voice</Label>
        <Info className="stroke-maindes stroke-2 w-3" />
      </div>
      {/* MAIN COMPONENT */}
      
      <div className="flex-1 rounded-2xl bg-slate-100 flex flex-row items-start justify-start p-[1rem] box-border gap-[1rem] max-w-full mq625:flex-wrap">
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
            <Button variant="outline">Change Voice </Button>
          </div>
          
          {/* Voice Card */}
          <div className="w-[19.25rem] rounded-xl bg-white box-border flex flex-row items-center justify-center py-[0.875rem] px-[0.937rem] gap-[0.875rem] min-w-[19.25rem] text-[0.75rem] text-orange-darker border-[1px] border-solid border-stroke-soft-200 mq625:flex-1">
            <div className="flex-1 flex flex-col  items-start justify-start gap-[0.25rem]">
              <div className="self-stretch flex flex-row  items-start justify-between ">
                <div className="flex flex-col gap-[0.25rem]">
                  {/* BADGES */}
                  <div className="flex gap-1 ">
                    <Badge variant="secondary">Engilsh</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="secondary">Visionary</Badge>
                  </div>
                  {/* TITLE */}
                  <div className="relative text-[0.875rem] tracking-[-0.01em] leading-[1.25rem] font-semibold text-text-main-900">
                    Archie - English teen youth
                  </div>
                  
                  <div className="relative leading-[1rem] font-medium text-text-sub-500">
                    Young male with British accent
                  </div>
                </div>
                <Button variant="outline" size="icon">
                  <FileVolume2  className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex  flex-1  leading-[1rem] text-text-soft-400">
                Devi is the pen name of a young Indian female Receive a one-time
                verification code via sms t...
              </div>
            </div>
           
          </div>
        </div>
      
    </section>
  );
};

export default SelectVoice;