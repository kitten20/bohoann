import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import BlackBox from "./BlackBox";

import module from "./style.module.scss";

function BlackBoxSlider({ userRef = null }) {
  const boxes = [
    {
      title: "каффы",
    },
    {
      title: "браслеты",
    },
    {
      title: "кольца",
    },
    {
      title: "серьги",
    },
    {
      title: "подвески",
    },
    {
      title: "кольца с камнями",
    },
  ];

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
        {boxes.map((i, index) => (
          <SwiperSlide key={index}>
            <BlackBox title={i.title} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={module.adaptive}>
        {boxes.map((i, index) => (
          <BlackBox title={i.title} />
        ))}
      </div>
    </>
  );
}

export default BlackBoxSlider;
