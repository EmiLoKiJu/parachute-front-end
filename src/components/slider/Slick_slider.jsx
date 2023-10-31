import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Slider_card from "@/components/slider/Slider_card";

export default function ResponsiveSlider() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="slider-container w-[90%] mx-auto">
      <Slider {...settings}>
        <Slider_card/>
        <Slider_card/>
        <Slider_card/>
        <Slider_card/>
        <Slider_card/>
        <Slider_card/>
      </Slider>
    </div>
  );
}
