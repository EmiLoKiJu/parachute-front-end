import { useDispatch, useSelector } from "react-redux"
import { setOnOff } from "@/redux/Humberger/humbergerSlice.js"
import { FaWindowClose, FaGripLines } from 'react-icons/fa'

export default function Humberger_btn() {
  const { isClose } = useSelector((store) => (store.humberger_switch))

  const dispatch = useDispatch();
  const switchHandler = () => {
    dispatch(setOnOff())
  }

  return(
    <button className="z-20 absolute mx-5 my-4 p-1 w-[40px] lg:hidden hover:text-brand_green"
            onClick={switchHandler}
    >
      {
        isClose ? <FaGripLines className="w-full h-full"/>
        : <FaWindowClose className="w-full h-full"/>
      }
    </button>
  );
}