
import AgentCreator from "@/components/agentCreator/agent-creator";
import MainScreen from "@/components/agentCreator/agent-creator";
import SidebarNavigation from "@/components/Sidebar/sidebar";

import StepIndicatorHorizontal from "@/components/Steps/stepIndicator";
import StepOne from "@/components/Steps/stepOne";

export default function page() {
  return <div className="flex min-w-full ">
    {/* <SidebarNavigation  /> */}
    <div className="flex flex-1 justify-center flex-col">
      <StepIndicatorHorizontal />
      <div className="flex flex-1 justify-center ">
       <AgentCreator  />
      </div>
      <StepOne />
      
    </div> 
  </div>;
}
