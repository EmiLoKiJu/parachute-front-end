import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";

import Slider_card from "@/components/slider/Slider_card";

export default function ResponsiveSlider() {
  const { parachutes, isLoading } = useSelector((store) => store.parachutes)

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

  if (isLoading === true) return (
    <div className="text-center">
      <img src="https://assets-v2.lottiefiles.com/a/4b96cd0e-1164-11ee-b18f-5fe294a16463/a7YAZLDNWQ.gif" className="w-1/2 h-auto mx-auto" alt="Centered Image" />
    </div>
  );

  return (
    <div className="slider-container w-[90%] mx-auto">
      <Slider {...settings}>
        {parachutes.map((parachute) => (
          <Slider_card
            key={parachute.id}
            id={parachute.id}
            name={parachute.name}
            rent={parachute.rent}
            photo_link={parachute.photo_link}
          />
        ))}
      </Slider>
    </div>
  );
}
