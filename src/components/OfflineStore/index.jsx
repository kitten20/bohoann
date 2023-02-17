import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import MapComponent from "../Map";

import module from "./style.module.scss";

function OfflineStore({ mapRef = null }) {
  const swiperSlides = [1, 2];

  const RowComponent = (
    city = "",
    street = "",
    schedule = "",
    telephone = "",
    time = "",
    price = ""
  ) => (
    <div className={module["offline-store__row"]}>
      <p>
        <strong>{city}</strong>
        <br />
        {street}
        <span>
          <br />
          {schedule}
        </span>
        <span>
          <br />
          тел. {telephone}
        </span>
      </p>
      <p>
        <span>{time}</span>
        <span>{price}</span>
      </p>
    </div>
  );

  const StoreRowMoscow = () =>
    RowComponent(
      "Москва",
      "Садово-Черногрязская 3Бс1",
      "12:00 - 21:00, выходной вс-пн",
      "+7 900 620 88 77",
      "м. Красные Ворота, 5 минут пешком",
      "паркинг 150Р в час"
    );
  const StoreRowSpb = () =>
    RowComponent(
      "Санкт-Петербург",
      "Рылеева, 33",
      "10:00 - 21:00 ежедневно",
      "+7 812 250 8 777",
      "м. Чернышевская, 5 минут пешком",
      "паркинг 100Р в час"
    );

  return (
    <>
      <div className={module["offline-store"] + " " + module.desktop}>
        <div className={module["offline-store__column"]}>
          <div className={module["offline-store__row"]}>
            <p>
              <strong>
                Москва
                <br />
                Садово-Черногрязская 3Бс1
              </strong>
              <span>
                <br />
                12:00 - 21:00, выходной вс-пн
              </span>
            </p>
            <p>м. Красные Ворота, 5 минут пешком паркинг 150Р в час</p>
            <p>тел. +7 900 620 88 77</p>
          </div>
          <div className={module["offline-store__row"]}>
            <p>
              <strong>
                Санкт-петербург
                <br />
                рылеева 33
              </strong>
              <br />
              <span>10:00 - 21:00 ежедневно</span>
            </p>
            <p>м. Чернышевская, 5 минут пешком паркинг 100Р в час</p>
            <p>тел. +7 812 250 8 777</p>
          </div>
        </div>
        <div className={module["offline-store__column"]}>
          <Swiper ref={mapRef} slidesPerView="auto">
            {swiperSlides.map((i, index) => (
              <SwiperSlide className={module.slide}>
                <MapComponent
                  className={module["offline-store-map"]}
                  mapVariant={i}
                  key={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className={module["offline-store"] + " " + module.mobile}>
        <div className={module["offline-store__column"]}>
          <Swiper ref={mapRef} slidesPerView="auto">
            {swiperSlides.map((i, index) => (
              <SwiperSlide className={module.slide}>
                <MapComponent
                  className={module["offline-store-map"]}
                  mapVariant={i}
                  key={index}
                />

                {i === 1 ? <StoreRowMoscow /> : <StoreRowSpb />}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default OfflineStore;
