import { Sidebar, 
    SidebarContent,
   SidebarMenuButton,
   SidebarMenuItem, 
   SidebarGroup,
   SidebarGroupContent, 
   SidebarGroupLabel, 
   SidebarMenu, 
   SidebarFooter} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import {Home,User2,ChevronUp, LogOut,Twitter,Youtube,Music} from "lucide-react"
import { Link } from "react-router"
import { Button } from "./button"

export function AppSidebar() {

interface SidebarProps {
   title:string,
   url:string,
   icons:React.ReactNode
}
    const items:SidebarProps[]=[
        {
            title:"Dashbord",
            url:"/dashbord",
            icons:<Home />
        }, 
          {
            title:"Twitter",
            url:"twitter",
            icons:<Twitter color="blue" />
        }, 
          {
            title:"Youtube",
            url:"youtube",
            icons:<Youtube size={24} color="red" />
        }, 
          {
            title:"Spotify",
            url:"spotify",
            icons:<Music  size={24} color="green" />
        }, 

    ]
  return (
    <Sidebar>
      <SidebarContent >
        <SidebarGroup>
            <SidebarGroupLabel className="font-semibold text-xl text-primary">Second Barin</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                 {items.map((item) => (
                <SidebarMenuItem key={item.title} className="m-2">
                  <SidebarMenuButton asChild>
                    <Link to={item.url}> 
                      {item.icons}
                      <span  className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="bg-neutral-600/30 font-semibold text-base  transition-all duration-200 ">
                      <SidebarMenuButton>
                        <User2  size={24}/>Ujjwal
                        <ChevronUp  className="ml-auto"/>
                      </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="top"   className="w-48  p-0">
                     <DropdownMenuItem >
                        <Button variant="destructive" className="w-full flex items-center gap-2 cursor-pointer font-semibold">
                          <LogOut  className="size-5 text-wh"/> Sign Out
                        </Button>
                     </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}