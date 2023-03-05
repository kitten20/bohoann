import { useRef, useState } from "react";
import { Zoom } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";

import MainCard from "../../../components/MainCard";
import Button from "../../../components/Button";

import module from "./style.module.scss";

import svg1 from "./assets/1.svg";
import arrowLeft from "./assets/arrow-left.svg";
import arrowRight from "./assets/arrow-right.svg";
import magnifier from "./assets/magnifier.svg";
import dolyamiBadge from "./assets/dolyami-badge.svg";
import heart from "./assets/heart.svg";

function Info({ discount = 0, itemCardData = [], addNewItem = () => {} }) {
  const [size, setSize] = useState("");
  const swiper = useSwiper();
  const swiperRef = useRef(null);

  const imagesCard = itemCardData?.images;

  const Discount = () => (
    <>
      {itemCardData?.discount > 0 || itemCardData?.discount !== undefined ? (
        <div className={module.discount}>-{itemCardData?.discount}%</div>
      ) : (
        ""
      )}
    </>
  );

  return (
    <div className={module.row}>
      <div className={module.column}>
        <Swiper
          zoom={{
            maxRatio: 1.5,
            minRatio: 1,
          }}
          ref={swiperRef}
          modules={[Zoom]}
        >
          <button
            className={module.swiper__button + " " + module.swiper__button_left}
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <img src={arrowLeft} alt="" />
          </button>
          <button
            className={
              module.swiper__button + " " + module.swiper__button_right
            }
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <img src={arrowRight} alt="" />
          </button>

          {imagesCard?.map((i, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-zoom-container">
                <img src={i} alt="" />
              </div>
              <Discount />
              <img
                src={magnifier}
                alt=""
                className={module.magnifier}
                onClick={() => swiperRef.current.swiper.zoom.in()}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={module.column}>
        <p className={module.title}>название товара в несколько слов</p>
        <button className={module.heart}>
          <img src={heart} alt="" />
        </button>
        <div>
          <div className={module["payment-square"]}>
            <p className={module.title}>
              {itemCardData?.price} Р <span>{itemCardData?.lastPrice} Р</span>
            </p>

            <div className={module["payment-row"]}>
              <img src={dolyamiBadge} alt="" />
              <p className={module.payment}>
                {itemCardData?.paymentNum} платежа по {itemCardData?.paymentSum}{" "}
                ₽ <img src={arrowRight} alt="" />
              </p>
            </div>
          </div>

          <p className={module.description}>{itemCardData?.description}</p>

          <div
            className={
              module["payment-size"] + " " + module["payment-size_first"]
            }
          >
            <p>
              <span>размер</span>
            </p>

            <div className={module["payment-grid"]}>
              {itemCardData?.sizes?.map((i, index) => (
                <p
                  key={index}
                  onClick={() => setSize(i)}
                  className={size === i ? module.active : ""}
                >
                  {i}
                </p>
              ))}
            </div>

            <div className={module["payment-circle"]}>
              другой <br />
              размер
            </div>
          </div>

          <div
            className={
              module["payment-size"] + " " + module["payment-size_second"]
            }
          >
            <p>
              <span>вес изделия</span>
            </p>
            <p>{itemCardData?.weight} гр</p>
            <p>Арт. {itemCardData?.itemId}</p>
          </div>

          <Button
            type="black"
            className={
              module.payment__button + " " + module.payment__button_black
            }
            onClick={() => addNewItem(itemCardData)}
          >
            в корзину
          </Button>

          <div className={module["payment__button-row"]}>
            <Button className={module.payment__button}>быстрый заказ</Button>
            <Button className={module.payment__button} linkBoolean route="/">
              намекнуть о подарке
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
