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

function AboutSlider() {
  const slides = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
    {
      img: img6,
    },
  ];

  return (
    <SliderWhiteArrows>
      {slides.map((i) => (
        <SwiperSlide className={module.about__slide} key={i.img}>
          <img src={i.img} alt="" />
        </SwiperSlide>
      ))}
    </SliderWhiteArrows>
  );
}

export default AboutSlider;
