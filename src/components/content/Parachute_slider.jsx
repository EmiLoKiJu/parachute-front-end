import ResponsiveSlider from "@/components/slider/Slick_slider";

export default function ParachuteSlider() {
  return(
    <div className="font-viga">
      <div className="title-wrapper text-center">
        <h2 className="font-semibold tracking-widest">NEW PARACHUTES</h2>
        <div className="text-gray-400 my-2 opacity-60">
          <p className="">Please Select a colourfull parachute.</p>
          <span className="inline-block tracking-[3px] mt-4">..................</span>
        </div>
      </div>
      <div className="my-5">
        <ResponsiveSlider/>
      </div>
    </div>
  );
}