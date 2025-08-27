/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
/* eslint-disable @typescript-eslint/no-unused-vars */

import Login from "./components/Login"
import { useRouter } from "next/navigation";



export default function Home() {
   const [logedin, setlogedin] = useState(false);
   const navigate= useRouter()

  useEffect(()=>{
      const user = localStorage.getItem("adminToken");
      if(user){
        navigate.push("/admin-login/adminhome")
      }
    },[])

  return (
    <>
    <div className="bg-[#F9FAFB] text-[#111827]">
    <Login></Login>
    </div>
    </>
  );
}
