

import { CalendarIcon, ChevronRight, CirclePlus, Contact, Contact2, Contact2Icon, Database, LayoutDashboard, Logs, LogsIcon, MegaphoneIcon, Settings, User, Waypoints } from "lucide-react";
import { Button } from "../ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";



interface Item {
  id: number;
  title: string;
  Logo: React.ReactNode;
}

export default function SidebarNavigation() {
 
  const items: Item[] = [
    { id: 1, title: 'Item 1', Logo: 'Description 1' },
    { id: 2, title: 'Item 2', Logo: 'Description 2' },
    { id: 3, title: 'Item 3', Logo: 'Description 3' },
    { id: 4, title: 'Item 1', Logo: 'Description 1' },
    { id: 5, title: 'Item 2', Logo: 'Description 2' },
    { id: 6, title: 'Item 3', Logo: 'Description 3' },
  ];

  const Campaigns: Item[] = [
    { id: 1, title: 'Item 1', description: 'Description 1' },
    { id: 2, title: 'Item 2', description: 'Description 2' },
    { id: 3, title: 'Item 3', description: 'Description 3' },
  ];


  return (
    <div className=" min-h-screen w-full overflow-hidden flex flex-col items-start gap-4 max-w-[272px] border-r-[1px] border-solid border-soft-200">

        {/* lOGO AND NAME */}
    
      <div className="  self-stretch flex flex-row items-start justify-start ">
        <div className="h-[88px] flex-1 bg-text-white-0 flex flex-col items-start justify-start p-3 box-border gap-[12px]">
          <div className="self-stretch rounded-3xs bg-text-white-0 overflow-hidden flex flex-row items-start justify-start p-3 gap-[12px]">
          <Avatar>
              <AvatarImage src="/Avatar2.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
              <a className="[text-decoration:none] self-stretch relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-paragraph-x-small text-text-main-900 text-left">
                CallXSpeak
              </a>
              <a className="[text-decoration:none] self-stretch relative text-xs leading-[16px] font-paragraph-x-small text-text-sub-500 text-left">
                AI Call Manager
              </a>
            </div>
            <div className="w-6 shadow-[0px_1px_2px_rgba(82,_88,_102,_0.06)] rounded-md bg-text-white-0 box-border overflow-hidden shrink-0 hidden flex-row items-center justify-center py-0 px-px border-[1px] border-solid border-stroke-soft-200">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                alt=""
                src="/arrowdownsline.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[7px] pl-2">
            <div className="h-px flex-1 relative box-border border-t-[1px] border-solid border-stroke-soft-200" />
          </div>
        </div>
      </div>

        {/* CREATE A cAMPAIGN bUTTON */}
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-1">
      <Button className="py-2  flex-1  flex flex-row gap-2  border-[1px] border-solid border-stroke-soft-200" variant="outline"><CirclePlus className="stroke-[2px] w-4 h-4"/> Create a Camapign</Button>
      </div>

        {/* Main NAv */}
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-1">
        <div className="flex-1 flex flex-col items-start justify-start gap-[4.3px]">
          {/* heading */}
          <div className="self-stretch flex flex-row items-start justify-start p-1">
            <div className="flex-1 relative text-xs tracking-[0.04em] leading-[16px] uppercase font-medium font-paragraph-x-small text-text-soft-400 text-left">
              MAIN
            </div>
          </div>
          {/* Items */}
          <div className="self-stretch rounded-lg bg-slate-100 flex flex-row items-start justify-start py-2 px-3 relative gap-[8px]">
            <LayoutDashboard className="h-5 w-5 stroke-2 overflow-hidden shrink-0 min-h-5" />
            <div className="flex-1 flex flex-row items-start justify-start gap-[6px]">
              <a className="[text-decoration:none] relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-paragraph-x-small text-text-main-900 text-left inline-block min-w-[73px]">
                Dashboard
              </a>
            </div>
            <ChevronRight className="stroke-[2px] w-5 h-5" />
            <div className="h-5 w-1 absolute !m-[0] top-[calc(50%_-_10px)] left-[-20px] rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-primary-base" />
          </div>
          <div className="self-stretch rounded-lg bg-text-white-0 flex flex-row items-start justify-start py-2 px-3 gap-[8px]">
            <MegaphoneIcon className="h-5 w-5 relative stroke-2 " />
            <div className=" flex flex-1  flex-row items-start justify-start gap-[6px]" >
            <a className="[text-decoration:none] relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-paragraph-x-small text-text-sub-500 text-left inline-block min-w-[75px]">
                Campaigns
              </a>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-text-white-0 flex flex-row items-start justify-start py-2 px-3 gap-[8px]">
            <LogsIcon  className="h-5 w-5 relative stroke-2 " />
            <div className=" flex flex-1  flex-row items-start justify-start gap-[6px]" >
            <a className="[text-decoration:none] relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-paragraph-x-small text-text-sub-500 text-left inline-block min-w-[75px]">
                Call Logs
              </a>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-text-white-0 flex flex-row items-start justify-start py-2 px-3 gap-[8px]">
            <Contact2Icon  className="h-5 w-5 relative stroke-2 " />
            <div className=" flex flex-1  flex-row items-start justify-start gap-[6px]" >
            <a className="[text-decoration:none] relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-paragraph-x-small text-text-sub-500 text-left inline-block min-w-[75px]">
                Contact Manager
              </a>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-text-white-0 flex flex-row items-start justify-start py-2 px-3 gap-[8px]">
            <Database  className="h-5 w-5 relative stroke-2 " />
            <div className=" flex flex-1  flex-row items-start justify-start gap-[6px]" >
            <a className="[text-decoration:none] relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-paragraph-x-small text-text-sub-500 text-left inline-block min-w-[75px]">
                Information Storage
              </a>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-text-white-0 flex flex-row items-start justify-start py-2 px-3 gap-[8px]">
            <CalendarIcon  className="h-5 w-5 relative stroke-2 " />
            <div className=" flex flex-1  flex-row items-start justify-start gap-[6px]" >
            <a className="[text-decoration:none] relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-paragraph-x-small text-text-sub-500 text-left inline-block min-w-[75px]">
                Calender
              </a>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-text-white-0 flex flex-row items-start justify-start py-2 px-3 gap-[8px]">
            <Waypoints  className="h-5 w-5 relative stroke-2 " />
            <div className=" flex flex-1  flex-row items-start justify-start gap-[6px]" >
            <a className="[text-decoration:none] relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-paragraph-x-small text-text-sub-500 text-left inline-block min-w-[75px]">
                Integration
              </a>
            </div>
          </div>

         

        </div>
      </div>

         {/* RECENT CAMPAIGNS  */}
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-1">
        <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
          <div className="self-stretch flex flex-row items-center justify-center p-1">
            <div className="flex-1 relative text-xs tracking-[0.04em] leading-[16px] uppercase font-medium font-paragraph-x-small text-text-soft-400 text-left">
              Recent Campaigns
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start ">
            <div className="self-stretch rounded-lg bg-text-white-0 flex flex-row items-center justify-start py-2 px-3 gap-[4px]">
 
              
              <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
              <div className="h-3 w-3 rounded-full relative overflow-hidden mx-1 flex bg-fuchsia-200" ></div>
                <div className="relative text-sm font-medium font-paragraph-x-small text-text-sub-500 text-left inline-block min-w-20">
                  Omaze CSR
                </div>
              </div>
              
          
            </div>
            <div className="self-stretch rounded-lg bg-text-white-0 flex flex-row items-center justify-start py-2 px-3 gap-[8px]">
              <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
              <div className="h-3 w-3 rounded-full relative overflow-hidden mx-1 flex bg-red-200" ></div>
                <div className="relative text-sm font-medium font-paragraph-x-small text-text-sub-500 text-left inline-block min-w-[79px]">
                  Whitefeils tope
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-text-white-0 flex flex-row items-center justify-start py-2 px-3 gap-[8px]">
 
              <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
              <div className="h-3 w-3 rounded-full relative overflow-hidden mx-1 flex bg-blue-200" ></div>
                <div className="relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-paragraph-x-small text-text-sub-500 text-left inline-block min-w-[79px]">
                  Melody books
                </div>
              </div>
              
          
            </div>
            
          </div>
        </div>
      </div>

        {/* Support and settings */}
      <div className="self-stretch flex flex-1 flex-row items-end justify-start py-0 px-5">
        <div className="flex-1 flex flex-col items-start justify-end pt-12 px-0 pb-0 gap-[4px]">
        <div className="self-stretch rounded-lg bg-text-white-0 flex flex-row items-start justify-start py-2 px-3 gap-[8px]">
            <User  className="h-5 w-5 relative stroke-2 " />
            <div className=" flex flex-1  flex-row items-start justify-start gap-[6px]" >
            <a className="[text-decoration:none] relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-paragraph-x-small text-text-sub-500 text-left inline-block min-w-[75px]">
                Support
              </a>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-text-white-0 flex flex-row items-start justify-start py-2 px-3 gap-[8px]">
            <Settings  className="h-5 w-5 relative stroke-2 " />
            <div className=" flex flex-1  flex-row items-start justify-start gap-[6px]" >
            <a className="[text-decoration:none] relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-paragraph-x-small text-text-sub-500 text-left inline-block min-w-[75px]">
                Settings
              </a>
            </div>
          </div>
        </div>
      </div>

        {/* Account owner profile card*/}
         <div className="self-stretch bg-text-white-0 flex flex-col items-start justify-start pt-0 px-3 pb-3 gap-[11px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[7px] pl-2">
        <div className="h-px flex-1 relative box-border border-t-[1px] border-solid border-stroke-soft-200" />
        </div>
        <div  className='self-stretch rounded-3xs bg-text-white-0 overflow-hidden flex flex-row items-center justify-start p-3 gap-[12px] text-left text-sm text-text-main-900 font-paragraph-x-small'
    >
      <Avatar>
      <AvatarImage src="/Avatar2.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
      <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
        <div className="flex flex-row items-start justify-start py-0 pr-2.5 pl-0 gap-[2px]">
          <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[104px]">
            Sophia Williams
          </div>
        </div>
        <div className="self-stretch relative text-xs leading-[16px] text-text-sub-500 whitespace-nowrap">
          sophia@aicaller.com
        </div>
      </div>
      
    </div>
      </div>
    </div>
    
  );
};

