import { Outlet } from "react-router-dom";
import Aside from "@/components/aside/Aside";
import Humberger_btn from '@/components/Humberger_btn';

export default function Home() {
  return(
    <div className="min-h-screen flex relative">
      <div className="aside_container absolute z-10 w-[150px] h-full hidden lg:h-screen lg:block lg:w-[15%] lg:static border border-r-1">
        <Aside/>
      </div>
      {/* opacity-20 will be added */}
      <div className="main_wrapper w-[85%] mx-auto flex flex-col justify-center">
        <main className="home_sub_pages">
            <Outlet/>
        </main>
      </div>
      <Humberger_btn/>
    </div>
  );
}