 import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../components/ui/app-sidebar"
import { Outlet } from "react-router"
import type React from "react"

const AppLayout:React.FC=() =>{
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
       <Outlet />
      </main>
    </SidebarProvider>
  )
}
export default AppLayout;