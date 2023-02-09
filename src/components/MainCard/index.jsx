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
  className = "",
  onClickRight = () => {},
  onClickLeft = () => {},
  children,
}) {
  const Buttons = () => (
    <div>
      <button className={module["card__swiper-button"]} onClick={onClickLeft}>
        <img src={leftIcon} alt="" />
      </button>
      <button className={module["card__swiper-button"]} onClick={onClickRight}>
        <img src={rightIcon} alt="" />
      </button>
    </div>
  );
  const Link = () => (
    <a href="" className={module.card__link_head}>
      {headLinkText}
    </a>
  );

  return (
    <div className={module.card}>
      {headBoolean && (
        <div className={module.card__head}>
          <div className={module["card__head-column"]}>
            <h2 className={module["card__head-text"]}>{headText}</h2>
          </div>

          {swiperBoolean && !headLinkBoolean ? (
            <div className={module["card__head-column"]}>
              <span></span>

              <Buttons />
            </div>
          ) : !swiperBoolean && headLinkBoolean ? (
            <div className={module["card__head-column"]}>
              <Link />

              <span></span>
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

      <div className={module.card__container}>{children}</div>
    </div>
  );
}

export default MainCard;
