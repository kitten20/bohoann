import { useRef } from "react";
import { Zoom } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";

import Button from "../../../components/Button";

import module from "./style.module.scss";

import svg1 from "./assets/1.svg";
import arrowLeft from "./assets/arrow-left.svg";
import arrowRight from "./assets/arrow-right.svg";
import magnifier from "./assets/magnifier.svg";
import dolyamiBadge from "./assets/dolyami-badge.svg";
import heart from "./assets/heart.svg";

function Info() {
  const swiper = useSwiper();
  const swiperRef = useRef(null);

  const items = [
    {
      discount: 30,
      img: svg1,
    },
    {
      discount: 50,
      img: svg1,
    },
    {
      discount: 5,
      img: svg1,
    },
    {
      img: svg1,
    },
  ];

  const Discount = ({ price = 0 }) => (
    <>
      <div className={module.discount}>-{price}%</div>
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

          {items.map((i, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-zoom-container">
                <img src={i?.img} alt="" />
              </div>
              {i?.discount > 0 && <Discount price={i?.discount} />}
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
              9 999 Р <span>19 999 Р</span>
            </p>

            <div className={module["payment-row"]}>
              <img src={dolyamiBadge} alt="" />
              <p className={module.payment}>
                4 платежа по 3 333 ₽ <img src={arrowRight} alt="" />
              </p>
            </div>
          </div>

          <p className={module.description}>
            Описание товара описание товара описание товара описание товара
            описание товараописание товара описание товара описание товара
            описание товара описание товара
          </p>

          <div
            className={
              module["payment-size"] + " " + module["payment-size_first"]
            }
          >
            <p>
              <span>размер</span>
            </p>

            <div className={module["payment-grid"]}>
              <p>14</p>
              <p>15</p>
              <p>15,5</p>
              <p className={module.active}>16</p>
              <p>16,5</p>
              <p>17</p>
              <p>17,5</p>
              <p>18</p>
              <p>18,5</p>
              <p>19</p>
              <p>19,5</p>
              <p>20</p>
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
            <p>99 гр</p>
            <p>Арт. 7890678</p>
          </div>

          <Button
            type="black"
            className={
              module.payment__button + " " + module.payment__button_black
            }
          >
            в корзину
          </Button>

          <div className={module["payment__button-row"]}>
            <Button className={module.payment__button}>быстрый заказ</Button>
            <Button className={module.payment__button}>
              намекнуть о подарке
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
