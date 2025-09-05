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
import {Home,User2,ChevronUp, LogOut,Twitter,Youtube,Music, Loader2Icon} from "lucide-react"
import { Link } from "react-router"
import { Button } from "./button"
import { useContext } from "react"
import { UserContextProvider } from "@/context/user-content"
export function AppSidebar() {
  const context = useContext(UserContextProvider);
if (!context) {
  throw new Error("useContext must be used inside a ContextProvider");
}
const { user, loading,logout } = context;
  if(!user){
      return ;
    }
   
    if(loading){
      return <div className="text-sm text-gray-500">Loading <Loader2Icon className="animate-spin" /> </div>
    }
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
            <SidebarGroupLabel className="font-semibold text-xl text-primary">Second Brain</SidebarGroupLabel>
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
                      <SidebarMenuButton className="cursor-pointer">
                        <User2  size={24}/>{user?.username}
                        <span className="text-gray-500 text-sm">{user?.email}</span>
                        <ChevronUp  className="ml-auto"/>
                      </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="top"   className="w-48  p-0">
                     <DropdownMenuItem >
                        <Button  onClick={logout}   variant="destructive" className="w-full flex items-center gap-2 cursor-pointer font-semibold">
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