import { FaGripLines } from 'react-icons/fa'

export default function Humberger_btn() {
  return(
    <button className="fixed mt-[5%] sm:mt-[2%] ml-[5%] p-[1px] w-[50px] text-center border text-white bg-brand_green lg:hidden"
            onClick={() => console.log('Hi, from Navlink')}
    >
      <FaGripLines className="inline"/>
    </button>
  );
}