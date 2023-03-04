import { useServerStore } from "../../store";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import MapComponent from "../Map";

import module from "./style.module.scss";

function OfflineStore({ mapRef = null, className = "" }) {
  const swiperSlides = [1, 2];
  const { serverData } = useServerStore();

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
     serverData[0]?.offlineStore[0].city,
     serverData[0]?.offlineStore[0].street,
     serverData[0]?.offlineStore[0].schedule,
     serverData[0]?.offlineStore[0].telephone,
     serverData[0]?.offlineStore[0].time,
     serverData[0]?.offlineStore[0].price
    );
  const StoreRowSpb = () =>
    RowComponent(
     serverData[0]?.offlineStore[1].city,
     serverData[0]?.offlineStore[1].street,
     serverData[0]?.offlineStore[1].schedule,
     serverData[0]?.offlineStore[1].telephone,
     serverData[0]?.offlineStore[1].time,
     serverData[0]?.offlineStore[1].price
    );

  return (
    <>
      <div
        className={
          module["offline-store"] + " " + module.desktop + " " + className
        }
      >
        <div className={module["offline-store__column"]}>
          {serverData[0]?.offlineStore.map((i) => (
            <div className={module["offline-store__row"]}>
              <p>
                <strong>
                  {i.city}
                  <br />
                  {i.street}
                </strong>
                <span>
                  <br />
                  {i.schedule}
                </span>
              </p>
              <p>
                {i.time} {i.price}
              </p>
              <p>тел. {i.telephone}</p>
            </div>
          ))}
        </div>
        <div className={module["offline-store__column"]}>
          <Swiper ref={mapRef} slidesPerView="auto">
            {swiperSlides?.map((i, index) => (
              <SwiperSlide className={module.slide} key={index}>
                <MapComponent
                  className={module["offline-store-map"]}
                  mapVariant={i}
                  {...{ serverData }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div
        className={
          module["offline-store"] + " " + module.mobile + " " + className
        }
      >
        <div className={module["offline-store__column"]}>
          <Swiper ref={mapRef} slidesPerView="auto">
            {swiperSlides?.map((i, index) => (
              <SwiperSlide className={module.slide} key={index}>
                <MapComponent
                  className={module["offline-store-map"]}
                  mapVariant={i}
                  {...{ serverData }}
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
