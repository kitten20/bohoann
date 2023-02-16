import { useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import module from "./style.module.scss";

import arrowLeft from "./assets/arrow-left.svg";
import arrowRight from "./assets/arrow-right.svg";

function SliderWhiteArrows({ children }) {
  const sliderRef = useRef(null);
  const swiper = useSwiper();

  return (
    <Swiper className={module.slider_white} ref={sliderRef}>
      {children}
      <button
        className={
          module.slider_white__button +
          " " +
          module["slider_white__button-left"]
        }
        onClick={() => sliderRef.current.swiper.slidePrev()}
      >
        <img src={arrowLeft} alt="" />
      </button>
      <button
        className={
          module.slider_white__button +
          " " +
          module["slider_white__button-right"]
        }
        onClick={() => sliderRef.current.swiper.slideNext()}
      >
        <img src={arrowRight} alt="" />
      </button>
    </Swiper>
  );
}

export default SliderWhiteArrows;
