import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getParachutes } from "@/redux/parachutes/parachutesSlice";
import { useEffect } from 'react';

import Slider_card from "@/components/slider/Slider_card";

export default function ResponsiveSlider() {
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.login);
  const { parachutes } = useSelector((store) => store.parachutes)

// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (token) {
      dispatch(getParachutes(token));
    }
  }, [token]);

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
