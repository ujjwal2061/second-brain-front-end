// import React from 'react'
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Brain } from "lucide-react";
import { useState } from "react";
import {Menu ,X} from "lucide-react";

export default function Navabar() {
  const [IsExpand,setExpand]=useState<boolean>(false);

  const ExpandMenu=()=>{
    setExpand(!IsExpand)
  }
  return (
    <div className=" relative flex justify-between items-center p-2 w-full">
      <div className="flex items-center  p-0 gap-1">
        <Link to="/">
          <Brain className="text-primary" />
        </Link>
        <p className="text-base font-medium">Second Brain</p>
      </div>
      {/*This for the Desktop Menu */}
      <div className="hidden md:flex items-center gap-2 ">
        <Link to="/login">
          <Button variant="outline" title="Login" className="w-full cursor-pointer border-purple-400  text-purple-600 ">
            Start
          </Button>
        </Link>
        <Link to="/signup">
          <Button variant="default" title="Signup" className="w-full cursor-pointer">
            Signup
          </Button>
        </Link>
      </div>
       <div className="md:hidden">
        <Button  className=" cursor-pointer"
        variant="ghost"
        onClick={ExpandMenu}
        size="icon"
        >
         {IsExpand ? (
           <X />
          ):(
           <Menu />
         )}
        </Button>
       </div>
       {/*For moblie view Point of Navbar */}
       {IsExpand && (
        <div className="absolute top-12 left-0 w-full dark:bg-black bg-white border-t shadow-md md:hidden">
          <div className="flex flex-col gap-3 p-4">
            <Link to="/login" onClick={() => setExpand(false)}>
              <Button
                variant="outline"
                title="Login"
                className="w-full cursor-pointer border-purple-400 text-purple-600 dark:text-white"
              >
                Start
              </Button>
            </Link>
            <Link to="/signup" onClick={() => setExpand(false)}>
              <Button
                variant="default"
                className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700 text-white"
              >
                Signup
              </Button>
            </Link>
          </div>
        </div>
      )}

    </div>
  );
}
