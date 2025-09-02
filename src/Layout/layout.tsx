import { Outlet } from "react-router";
// import { SidebarProvider,SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/ui/app-sidebar";
export default function Screen(){
    return(
    
        <div className="min-h-screen dark:bg-black ">
          <main>
            <Outlet />
          </main>
        </div>
     
    )
}