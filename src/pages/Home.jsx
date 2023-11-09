import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Aside from "@/components/aside/Aside";
import Humberger_btn from '@/components/Humberger_btn';

const Home = ()=> {
  const { isClose } = useSelector((store) => (store.humberger_switch))
  const hide_show_popUp = isClose ? "hidden" : ""

  return(
    <div className="min-h-screen flex relative">
        <Humberger_btn/>
      <div className={`aside_container z-10 ${hide_show_popUp} absolute h-full lg:h-screen lg:block lg:w-[15%] lg:static border border-r-1`}>
          <Aside/>
      </div>
      <div className="main_wrapper  w-[85%] lg:opacity-1 mx-auto mt-4 flex flex-col justify-center ">
        <main className="home_sub_pages">
            <Outlet/>
        </main>
      </div>
    </div>
  );
}

export default Home;