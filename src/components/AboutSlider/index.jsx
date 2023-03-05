import { useServerStore } from "../../store";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SliderWhiteArrows from "../SliderWhiteArrows";

import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";
import img6 from "./assets/6.png";

import module from "./style.module.scss";

function AboutSlider({
  userSlides = [],
  className = "",
  userSlideClassName = "",
}) {
  const { serverData } = useServerStore();

  const slides = serverData[0]?.aboutSlider;

  return (
    <SliderWhiteArrows {...{ className }}>
      {userSlides.length === 0
        ? slides?.map((i) => (
            <SwiperSlide className={module.about__slide} key={i.img}>
              <img src={i.img} alt="" />
            </SwiperSlide>
          ))
        : userSlides.map((i) => (
            <SwiperSlide
              className={module.about__slide + " " + userSlideClassName}
              key={i.img}
            >
              <img src={i.img} alt="" />
            </SwiperSlide>
          ))}
    </SliderWhiteArrows>
  );
}

export default AboutSlider;
