import type { NextPage } from "next";
import TextInput from "./text-input";
import TextArea from "./text-area1";
import FrameComponent from "./frame-component1";
import FrameComponent1 from "./frame-component";
import TextArea1 from "./text-area";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Info } from "lucide-react";


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
      
      <TextInput
          label="Language"
          infoCustomFill="/infocustomfill-1.svg"
          arrowLeftSLine="/arrowleftsline.svg"
          arrowRightSLine="/arrowrightsline.svg"
          infoCustomFill1="/infocustomfill.svg"
          europeanUnion="/european-union-1.svg"
          arrowDownSLine="/arrowdownsline-1.svg"
          errorWarningFill="/errorwarningfill-1.svg"
          label10AlignSelf="unset"
          label10Flex="1"
          label10MinWidth="13.563rem"
        />  
        <TextInput
          label="Tone"
          infoCustomFill="/infocustomfill-2.svg"
          arrowLeftSLine="/arrowleftsline.svg"
          arrowRightSLine="/arrowrightsline.svg"
          infoCustomFill1="/infocustomfill.svg"
          europeanUnion="/european-union-2.svg"
          arrowDownSLine="/arrowdownsline-2.svg"
          errorWarningFill="/errorwarningfill-2.svg"
          label10AlignSelf="unset"
          label10Flex="1"
          label10MinWidth="13.563rem"
        />
      </div>
      <TextArea
        label="Starting message"
        infoCustomFill="/infocustomfill-3.svg"
        arrowLeftSLine="/arrowleftsline.svg"
        arrowRightSLine="/arrowrightsline.svg"
        resize="/resize.svg"
        errorWarningFill="/errorwarningfill-3.svg"
        showOptional
      />
      <FrameComponent />
      <FrameComponent1 />
      <TextArea
        label="Agent Instructions"
        infoCustomFill="/infocustomfill-6.svg"
        arrowLeftSLine="/arrowleftsline.svg"
        arrowRightSLine="/arrowrightsline.svg"
        resize="/resize-1.svg"
        errorWarningFill="/errorwarningfill-4.svg"
        showOptional={false}
      />
      <TextArea
        label="Script"
        infoCustomFill="/infocustomfill-7.svg"
        arrowLeftSLine="/arrowleftsline.svg"
        arrowRightSLine="/arrowrightsline.svg"
        resize="/resize-2.svg"
        errorWarningFill="/errorwarningfill-5.svg"
        showOptional={false}
      />
      <TextArea1 />
    </div>
  );
}
