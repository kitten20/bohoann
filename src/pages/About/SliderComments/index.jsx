import { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

import Comment from "./Comment";

import module from "./style.module.scss";

import leftArrow from "./assets/left-arrow.svg";
import rightArrow from "./assets/right-arrow.svg";

function SliderComments({ serverData = [] }) {
  const swiper = useSwiper();
  const swiperRef = useRef(null);

  const comments = serverData?.commentsSlider;

  const breakpoints = {
    1440: {
      slidesPerView: 2.3,
      spaceBetween: 40,
      centeredSlides: false,
    },

    200: {
      slidesPerView: 1,
      centeredSlides: true,
    },
  };

  return (
    <Swiper {...{ breakpoints }} ref={swiperRef} className={module.slider}>
      <button
        className={module.swiper__button + " " + module.swiper__button_left}
        onClick={() => swiperRef.current.swiper.slidePrev()}
      >
        <img src={leftArrow} alt="" />
      </button>

      <button
        className={module.swiper__button + " " + module.swiper__button_right}
        onClick={() => swiperRef.current.swiper.slideNext()}
      >
        <img src={rightArrow} alt="" />
      </button>

      {comments?.map((i) => (
        <SwiperSlide>
          <Comment text={i.text} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderComments;
