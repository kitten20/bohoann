import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

import ProductCard from "../ProductCard";

function ProductsSlider({ itemsArray = [],  }) {
    const swiper = useSwiper()

  return (
    <Swiper slidesPerView={4}>
      {itemsArray.map((i, index) => (
        <SwiperSlide key={index}>
          <ProductCard imageIndex={i} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProductsSlider;
