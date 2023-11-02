import { TbCaretLeft } from 'react-icons/tb'

import { Link } from 'react-router-dom';
import ReportReader from '@/components/Report_reader';

import color_wheel from '@/assets/images/color_wheel.png';
import par_1 from '@/assets/images/parachutes/par-1.png';

export default function DetailsPage() {
  return(
    <div className="relative card_details_container
                   "
    >
      <div className="px-6 lg:px-10">
        <div className="flex items-center justify-between flex-wrap">
          <div className="card_img lg:w-[70%] mx-auto">
            <img src={par_1} alt="Big Parachute picture" />
          </div>
          <div className="card_reports w-full lg:w-[25%]">
            <div className="text-right">
              <div className="reporter_container">
                  <h6 className="text-xs font-bold tracking-widest">NEW PARACHUTES</h6>
                  <span className="text-xs">- Small description</span>
                  <ReportReader/>
              </div>
              <div className="button_wheel mt-8">
                <Link to="/parachutes" className="text-xs font-semibold">
                  DISCOVER MORE MODELS
                  <span className="text-brand_color text-lg"> &gt; </span>
                </Link>
                <div className="">
                  <div className="color_wheel_wrapper inline-block max-w-[100px] my-4">
                    <img src={color_wheel} alt="color circle" />
                  </div>
                </div>
                <button className="py-[10px] px-3 w-[120px] lg:w-[180px] border rounded-[50px] text-white bg-brand_green">
                  Reserve
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home_btn">
        <Link to="/parachutes" className="back_home w-[90px] p-3 text-right text-white hover:text-white mt-10 rounded-tr-[35px] rounded-br-[35px] bg-brand_green">
          <TbCaretLeft className="inline-block text-[25px] leading-[35px]"/>
        </Link>
      </div>
    </div>
  );
}