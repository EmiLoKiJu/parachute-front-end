import { TbCaretLeft } from 'react-icons/tb'

import { Link } from 'react-router-dom';
import ReportReader from '@/components/Report_reader';

import color_wheel from '@/assets/images/color_wheel.png';
import par_1 from '@/assets/images/parachutes/par-1.png';

export default function DetailsPage() {
  return(
    <div className="border relative card_details_container
                   "
    >
      <div className="px-10">
        <div className="flex justify-between">
          <div className="card_img w-[70%] border">
            <img src={par_1} alt="Big Parachute picture" />
          </div>
          <div className="card_reports w-[25%]">
            <div className="text-right">
              <div className="reporter_container">
                  <h5 className="font-semibold tracking-widest">NEW PARACHUTES</h5>
                  <span className="text-xs">- Small description for the parachute</span>
                  <ReportReader/>
              </div>
              <div className="button_wheel mt-8">
                <Link to="/parachutes" className="font-semibold">
                  DISCOVER MORE MODELS
                  <span className="text-brand_color text-lg"> &gt; </span>
                </Link>
                <div className="">
                  <div className="color_wheel_wrapper inline-block max-w-[100px] my-10">
                    <img src={color_wheel} alt="color circle" />
                  </div>
                </div>
                <button className="py-[14px] px-8 w-[180px] border rounded-[50px] text-white bg-brand_green">
                  Reserve
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home_btn">
        <Link to="/parachutes" className="back_home w-[80px] p-3 text-right text-white mt-10 border rounded-tr-[35px] rounded-br-[35px] bg-brand_green">
          <TbCaretLeft className="inline-block text-[25px] leading-[35px]"/>
        </Link>
      </div>
    </div>
  );
}