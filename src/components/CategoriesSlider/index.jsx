import { useServerStore } from "../../store";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import module from "./style.module.scss";

import firstSvg from "./assets/1.svg";
import secondSvg from "./assets/2.svg";
import thirdSvg from "./assets/3.svg";
import fourthSvg from "./assets/4.png";
import fifthSvg from "./assets/5.svg";
import sixthSvg from "./assets/6.svg";
import seventhSvg from "./assets/7.svg";

function CategoriesSlider() {
  const { serverData } = useServerStore();

  const images = [
    firstSvg,
    secondSvg,
    thirdSvg,
    fourthSvg,
    fifthSvg,
    sixthSvg,
    seventhSvg,
  ];

  const swiperData = serverData[0]?.categoriesSlider;

  return (
    <Swiper
      breakpoints={{
        1440: {
          slidesPerView: 10,
          spaceBetween: 15,
        },
        1024: {
          spaceBetween: 20,
          slidesPerView: 6.5,
        },
        300: {
          slidesPerView: "auto",
          spaceBetween: 15,
        },
      }}
      className={module.categories}
    >
      {swiperData?.map((i, index) => (
        <SwiperSlide key={index} className={module.category}>
          <Link to={i.link}>
            <img src={images[i.img]} alt="" />
            <p>{i.title}</p>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CategoriesSlider;
