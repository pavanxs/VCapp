
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Info, MessageCircleCode, PhoneCall } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import SelectVoice from "./select-voice";
import UploadComponent from "./upload-component";


export default function AgentCreator() {
  return (
    // Name your Agent
    <div className=" max-w-[750px] relative flex flex-col items-center justify-center gap-[1rem] ">
      <div className="flex flex-col items-start w-full max-w-full gap-1">
      <div className=" flex flex-row gap-1  items-center">
        <Label htmlFor="Name">Agent Name</Label>
        <Info className="stroke-maindes stroke-2 w-3" />
      </div>
      <Input type="Name" id="Name" placeholder="Name your Agent ..." />
    </div>

      {/* LANGUAGE & Tone */}
      <div className="self-stretch flex flex-row  items-center  gap-4 w-full ">

      {/* language */}
      <div className="flex flex-col items-start w-full max-w-full gap-1">
      <div className=" flex flex-row gap-1  items-center">
        <Label htmlFor="Name">Language</Label>
        <Info className="stroke-maindes stroke-2 w-3" />
      </div>
      <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
    </div>

    {/* tone */}
        <div className="flex flex-col items-start w-full max-w-full gap-1">
          <div className=" flex flex-row gap-1  items-center">
            <Label htmlFor="Name">Language</Label>
            <Info className="stroke-maindes stroke-2 w-3" />
          </div>
          <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
        </div>
      </div>

      {/* Starting Message */}
      
      <div className="flex flex-col items-start w-full max-w-full gap-1">
      <div className=" flex flex-row gap-1  items-center">
        <Label htmlFor="Name">Starting Message</Label>
        <Info className="stroke-maindes stroke-2 w-3" />
      </div>
      <Textarea placeholder="Type your message here." id="message" className="h-20"/>
    </div>

      <SelectVoice />
      {/* SELECT TYPE OF AGENT */}
      <div className="flex  justify-start  gap-1  flex-col">
      <div className=" flex flex-row gap-1  items-center">
        <Label htmlFor="Name">Select Type of Agent</Label>
        <Info className="stroke-maindes stroke-2 w-3" />
      </div>
      
        {/* option one */}
      <RadioGroup className="flex flex-row" defaultValue="option-one">
            <div className="rounded-xl flex flex-1  flex-row  justify-start py-3.5 px-3.5 gap-[14px] max-w-full border-[1px] border-solid border-primary-base">
                <div className="h-10 w-10 rounded-full  box-border  shrink-0 flex flex-row items-center justify-center py-2.5 px-[9px] border-[1px] border-solid border-stroke-soft-200">
                  <PhoneCall  className="stroke-maindes " />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-1  max-w-full">
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
            <div className="  rounded-xl flex-1  flex flex-row justify-start py-3.5 px-[15px] gap-3.5 max-w-full border-[1px] border-solid border-stroke-soft-200">
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
                    Use an authenticator w wrwvroiub app to generate time-based 
                    codes for login.
                  </div>
                </div>
                <RadioGroupItem value="option-two" id="option-two" />
              </div>
            </RadioGroup>
      

      </div>
      
      {/* Agent Instructions */}
      <div className="flex flex-col items-start w-full max-w-full gap-1">
      <div className=" flex flex-row gap-1  items-center">
        <Label htmlFor="Name">Agent Instructions
        </Label>
        <Info className="stroke-maindes stroke-2 w-3" />
      </div>
      <Textarea placeholder="Type your message here." id="message" className="h-20"/>
    </div>

    {/* Script */}
    <div className="flex flex-col items-start w-full max-w-full gap-1">
      <div className=" flex flex-row gap-1  items-center">
        <Label htmlFor="Name">Script</Label>
        <Info className="stroke-maindes stroke-2 w-3" />
      </div>
      <Textarea placeholder="Type your message here." id="message" className="h-20"/>
    </div>

    {/* Upload Data */}
    <div className="flex flex-col items-start w-full max-w-full gap-1">
      <div className=" flex flex-row gap-1  items-center">
        <Label htmlFor="Name">Upload Data</Label>
        <Info className="stroke-maindes stroke-2 w-3" />
      </div>
      <UploadComponent />
    </div>
      
    </div>
  );
}
