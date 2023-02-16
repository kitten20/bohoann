import { useRef } from "react";

import ProductsSlider from "../../components/ProductsSlider";
import BlackBoxSlider from "../BlackBoxSlider";

import module from "./style.module.scss";

import leftIcon from "./assets/left-icon.svg";
import rightIcon from "./assets/right-icon.svg";

function MainCard({
  headBoolean = true,
  headText = "",
  headLinkBoolean = false,
  headLinkText = "",
  headSwiperPagination = false,

  swiperBoolean = false,
  swiperOnly = false,

  style = {},
  className = "",
  headClassName = "",
  productClassName = "",

  onClickRight = () => {},
  onClickLeft = () => {},

  productsSliderBoolean = false,
  products = [],

  categoriesBoolean = false,

  onlyHeadPaddingBoolean = false,

  children,
}) {
  const sliderRef = useRef(null);
  const checkPadding = () =>
    (categoriesBoolean && module.card_padding) ||
    (onlyHeadPaddingBoolean && module.card_padding);

  const Buttons = () => (
    <div>
      <button
        className={module["card__swiper-button"]}
        onClick={() => sliderRef.current.swiper.slidePrev()}
      >
        <img src={leftIcon} alt="" />
      </button>
      <button
        className={module["card__swiper-button"]}
        onClick={() => sliderRef.current.swiper.slideNext()}
      >
        <img src={rightIcon} alt="" />
      </button>
    </div>
  );
  const Link = () => (
    <a href="https://youtube.com" className={module.card__link_head}>
      {headLinkText}
    </a>
  );

  return (
    <div
      className={module.card + " " + checkPadding() + " " + className}
      {...{ style }}
    >
      {headBoolean && (
        <div className={module.card__head + " " + headClassName}>
          <div className={module["card__head-column"]}>
            <h2 className={module["card__head-text"]}>{headText}</h2>
          </div>

          {swiperBoolean && !headLinkBoolean ? (
            <div
              className={
                module["card__head-column"] +
                " " +
                module["card__head-column_50"]
              }
            >
              <span></span>

              <Buttons />
            </div>
          ) : !swiperBoolean && headLinkBoolean ? (
            <div
              className={
                module["card__head-column"] +
                " " +
                module["card__head-column_50"]
              }
            >
              <span></span>
              <Link />
            </div>
          ) : swiperBoolean && headLinkBoolean ? (
            <div className={module["card__head-column"]}>
              <Link />

              <Buttons />
            </div>
          ) : (
            <></>
          )}
        </div>
      )}

      <div className={module.card__container}>
        {productsSliderBoolean ? (
          <ProductsSlider
            itemsArray={products}
            userRef={sliderRef}
            {...{ productClassName }}
          />
        ) : categoriesBoolean ? (
          <BlackBoxSlider userRef={sliderRef} />
        ) : (
          children
        )}
      </div>
    </div>
  );
}

export default MainCard;
