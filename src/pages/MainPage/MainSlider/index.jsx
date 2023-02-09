import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import module from "./style.module.scss";

import arrow from "./assets/arrow.svg";

function MainSlider() {
  return (
    <Swiper slidesPerView={1}>
      <SwiperSlide className={module.slide}></SwiperSlide>
      <SwiperSlide className={module.slide}>
        <div className={module.slide__content}>
          <div className={module.slide__row}>
            <h2>
              узнай про
              <br />
              мои желания
            </h2>
          </div>

          <div className={module.slide__row}>
            <h2>
              намекните <br /> o
              подарке, достойном вас
            </h2>
            <button>
              попробовать сервис “намекнуть” <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default MainSlider;
