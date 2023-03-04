import { useServerStore } from "../../store";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import BlackBox from "./BlackBox";
import Button from "../Button";

import module from "./style.module.scss";

function BlackBoxSlider({ userRef = null }) {
  const { serverData } = useServerStore();

  const breakpoints = {
    1440: {
      slidesPerView: 4.9,
    },

    1024: {
      slidesPerView: 3.5,
    },

    200: {
      spaceBetween: 50,
      slidesPerView: "auto",
    },
  };

  return (
    <>
      <Swiper ref={userRef} {...{ breakpoints }} className={module.desktop}>
        {serverData[0]?.blackBoxSlider.map((i, index) => (
          <SwiperSlide key={index}>
            <BlackBox title={i.title} route={i.link} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={module.adaptive}>
        <div>
          {serverData[0]?.blackBoxSlider.map((i, index) => (
            <Link>
              <BlackBox title={i.title} key={index} />
            </Link>
          ))}
        </div>
        <Link to ="/collections">посмотреть все категории</Link>
      </div>
    </>
  );
}

export default BlackBoxSlider;
