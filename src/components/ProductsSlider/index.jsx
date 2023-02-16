import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ProductCard from "../ProductCard";

import module from "./style.module.scss";

function ProductsSlider({
  itemsArray = [],
  userRef = null,
  productClassName = "",
}) {
  const breakpoints = {
    1440: {
      slidesPerView: 4,
    },

    1024: {
      slidesPerView: 2.8,
      spaceBetween: 35,
    },

    768: {
      slidesPerView: 4.8,
    },

    468: {
      slidesPerView: 3.1,
    },

    200: {
      slidesPerView: 2.6,
      spaceBetween: 35,
    },
  };

  return (
    <Swiper
      slidesPerView={4}
      className={module.products}
      ref={userRef}
      {...{ breakpoints }}
    >
      {itemsArray.map((i, index) => (
        <SwiperSlide key={index}>
          <ProductCard imageIndex={i} className={productClassName} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProductsSlider;
