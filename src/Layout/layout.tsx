import { Outlet } from "react-router";
import Navabar from "@/pages/navabar-view";
export default function Screen(){
    return(
        <div className="min-h-screen dark:bg-black ">
          <Navabar />
          <main>
            <Outlet />
          </main>
        </div>
    )
}