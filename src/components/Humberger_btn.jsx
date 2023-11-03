import { useDispatch } from "react-redux"
import { setOnOff } from "@/redux/Humberger/humbergerSlice.js"
import { FaWindowClose } from 'react-icons/fa'

export default function Humberger_btn() {
  const dispatch = useDispatch();
  const switchHandler = () => {
    dispatch(setOnOff())
  }

  return(
    <button className="z-20 absolute mx-5 my-4 p-1 w-[40px] lg:hidden hover:text-brand_green"
            onClick={switchHandler}
    >
      <FaWindowClose className="w-full h-full"/>
    </button>
  );
}