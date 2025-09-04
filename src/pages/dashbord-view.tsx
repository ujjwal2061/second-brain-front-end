import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card-custom";
import { CreateContent } from "@/components/ui/create-content";
import { useState } from "react";
import { Share2Icon ,Plus} from "lucide-react";

export default function DashbordPage() {
  const [IsModelOpen,setModeleOpen]=useState(false);

  return (
    <div className=" flex  flex-col  w-full  ">
      <div className="w-full flex  justify-end gap-2 px-2  py-1.5 items-center" >
        <Button variant={"secondary"} title="Share" className="flex border-2 cursor-pointer px-3 border-purple-300 text-primary/60" ><Share2Icon size={24} />Share</Button>
        <Button   onClick={()=>setModeleOpen(true)}  variant={"default"} className="flex cursor-pointer " title="Add content"><Plus size={24} />Add content</Button>
      </div>
      <CreateContent  open={IsModelOpen} onClose={()=>setModeleOpen(false)}   />
      <div className="grid grid-cols-1  lg:grid-cols-4 sm:grid-cols-2  gap-2">
      <Card type="twitter" title="First Tweet of Second barain" link="https://x.com/neyuj_11/status/1962963163793805392"  tags="#grind"   category="twitter" />
      {/* <Card  type="youtube" title="The End" link="https://youtu.be/M8J9zHyyUYc" tags="#yt | #end"  category="youtube"/>
       <Card type="twitter" title="First Tweet of Second barain" link="https://x.com/neyuj_11/status/1962963163793805392"  tags="#grind"   category="twitter" />
      <Card  type="youtube" title="The End" link="https://youtu.be/M8J9zHyyUYc" tags="#yt | #end"  category="youtube"/>
       <Card type="twitter" title="First Tweet of Second barain" link="https://x.com/neyuj_11/status/1962963163793805392"  tags="#grind"   category="twitter" />
      <Card  type="youtube" title="The End" link="https://youtu.be/M8J9zHyyUYc" tags="#yt | #end"  category="youtube"/> */}
      </div>
    </div>
  )
}
 