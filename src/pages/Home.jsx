import { Outlet } from "react-router-dom";
import Aside from "@/components/aside/Aside";

export default function Home() {
  return(
    <div className="flex">
      <Aside/>
      <main className="content flex-1">
        <div className="screen h-full flex items-center justify-center">
          <div className="">
            <Outlet/>
          </div>
        </div>
      </main>
    </div>
  );
}