import ResponsiveSlider from "../slider/Slick_slider";

export default function ComponentA() {
  return(
    <div className="border border-blue-800 font-viga">
      <div className="title-wrapper text-center">
        <h2>NEW PARACHUTES!</h2>
        <p>Please Select a colourfull parachute.</p>
      </div>
      <ResponsiveSlider/>
    </div>
  );
}