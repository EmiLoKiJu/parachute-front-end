import { Outlet } from "react-router-dom";
import Aside from "@/components/aside/Aside";

export default function Home() {
  return(
    <div className="h-screen flex">
      <div className="aside_container w-[15%] border border-r-1">
        <Aside/>
      </div>
      <div className="main_wrapper w-[85%] border border-red-300 flex flex-col justify-center">
        <main className="home_sub_pages border">
            <Outlet/>
        </main>
      </div>
      
    </div>
  );
}