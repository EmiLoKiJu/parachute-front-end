import { Outlet } from "react-router-dom";
import Aside from "@/components/aside/Aside"


export default function Home() {
  return(
    <div className="flex">
      <Aside/>
      <main className="content flex-1 border border-blue-600 text-center">
        <Outlet/>
      </main>
    </div>
  );
}