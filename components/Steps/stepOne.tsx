import { Button } from "@/components/ui/button";
import { MessageCircleCode, PhoneCall, Router } from "lucide-react";


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


export default function page() {
    return (

    <div>

    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>

      {/* the popup */}
       {/* the heading */}
      <DialogContent className="sm:max-w-[480px] !rounded-2xl p-0 w-[480px] gap-0  flex flex-col items-center justify-start text-xs border-[1px] border-solid">
      <section className="self-stretch  overflow-hidden flex items-center justify-start py-4 px-6 box-border gap-[14px] max-w-full text-left text-base  ">
            <div className="h-10 w-10 shadow-[0px_1px_2px_rgba(228,_229,_231,_0.24)] rounded-full bg-bg-white-0 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-[9px] border-[1px] border-solid border-stroke-soft-200">
              <Router  className="stroke-maindes"/>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[14px] min-w-[247px] max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[4px] max-w-full">
                <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                  <div className=" relative tracking-[-0.01em] font-medium ">
                    Select your Platform
                  </div>
                </div>
                <div className=" text-maindes font-medium self-stretch relative text-sm tracking-[-0.01em] leading-[20px] text-text-sub-500">
                  Select the Platform where you want to host your AI
                </div>
              </div>
              
            </div>
          </section>

          {/* the text based divider */}
          <div className="self-stretch flex flex-row items-center bg-gray-100 justify-start py-1.5 px-4 box-border max-w-full flex-1 relative tracking-[0.04em] leading-[16px] uppercase font-medium ">
              Recipient Receives
            </div>

            {/* option one */}
            <RadioGroup className="p-4" defaultValue="option-one">
            <div className="self-stretch rounded-xl bg-bg-white-0 box-border flex flex-row flex-wrap items-start justify-start py-3.5 px-[15px] gap-[14px] max-w-full border-[1px] border-solid border-primary-base">
                <div className="h-10 w-10 rounded-full  box-border  shrink-0 flex flex-row items-center justify-center py-2.5 px-[9px] border-[1px] border-solid border-stroke-soft-200">
                  <PhoneCall  className="stroke-maindes " />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[214px] max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                    <div className=" antialiased text-sm font-medium inline-block min-w-[88px]">
                      Phone Call AI
                    </div>
                 </div>
                  <div className=" antialiased  text-maindes self-stretch relative text-xs leading-[16px] text-text-sub-500">
                    Receive a one-time verification code via SMS to enter during login.
                  </div>
                </div>
                <RadioGroupItem value="option-one" id="option-one" />
              </div>

            {/* option two  */}
            <div className="self-stretch  rounded-xl bg-bg-white-0 box-border flex flex-row flex-wrap items-start justify-start py-3.5 px-[15px] gap-[14px] max-w-full border-[1px] border-solid border-stroke-soft-200">
                <div className="h-10 w-10  rounded-full bg-bg-white-0 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-[9px] border-[1px] border-solid border-stroke-soft-200">
                <MessageCircleCode className="stroke-maindes" />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[214px] max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                    <div className="relative antialiased text-sm tracking-[-0.0em] leading-[20px] font-medium">
                      Whatsapp Chatbot (Coming soon)
                    </div>
                
                  </div>
                  <div className=" text-maindes anti self-stretch relative text-xs  text-text-sub-500">
                    Use an authenticator app to generate time-based verification
                    codes for login.
                  </div>
                </div>
                <RadioGroupItem value="option-two" id="option-two" />
              </div>
            </RadioGroup>

          <div className="self-stretch bg-bg-white-0 flex flex-row flex-wrap items-start justify-start pt-3.5 px-4 pb-4 gap-[16px] border-t-[1px] border-solid border-stroke-soft-200">
            <Button className="rounded-lg flex-1" variant="outline">Back</Button>
            <Button className="rounded-lg flex-1" >Next</Button>
            </div>
      </DialogContent>
    </Dialog>



        </div>


    





      );
}
