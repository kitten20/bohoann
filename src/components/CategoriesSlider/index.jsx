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
  const swiperData = [
    {
      title: "Примерка",
      link: "",
      img: firstSvg,
    },
    {
      title: "Долями",
      link: "",
      img: secondSvg,
    },
    {
      title: "Комплекты",
      link: "",
      img: thirdSvg,
    },
    {
      title: "От стилиста",
      link: "",
      img: fourthSvg,
    },
    {
      title: "название",
      link: "",
      img: fifthSvg,
    },
    {
      title: "название",
      link: "",
      img: sixthSvg,
    },
    {
      title: "название",
      link: "",
      img: seventhSvg,
    },
    {
      title: "Примерка",
      link: "",
      img: firstSvg,
    },
    {
      title: "Долями",
      link: "",
      img: secondSvg,
    },
    {
      title: "Комплекты",
      link: "",
      img: thirdSvg,
    },
  ];

  return (
    <Swiper
      breakpoints={{
        1440: {
          slidesPerView: 10,
          spaceBetween: 15,
        },
        1024: {
          spaceBetween: 20,
        },
        300: {
          slidesPerView: "auto",
          spaceBetween: 15,
        },
      }}
      className={module.categories}
    >
      {swiperData.map((i, index) => (
        <SwiperSlide key={index} className={module.category}>
          <img src={i.img} alt={i.img} />
          <p>{i.title}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CategoriesSlider;
