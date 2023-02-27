import { useState } from "react";

import Button from "../Button";
import Popup from "../Popup";

import module from "./style.module.scss";

import logo from "./assets/logo.svg";
import logoMobile from "./assets/logo_mobile.svg";
import badge from "./assets/badge.svg";
import badgeMobile from "./assets/badge_mobile.svg";
import starsIcon from "./assets/icon-stars.svg";
import walletIcon from "./assets/icon-wallet.svg";

function Dolyami({className = ""}) {
  const [activeState, setActiveState] = useState(false);

  return (
    <>
      <div className={module["dolyami-container"] + " " + className}>
        <div className={module.dolyami + " " + module.desktop}>
          <p>
            Купи сейчас, плати потом.{" "}
            <a onClick={() => setActiveState(!activeState)}>Подробнее</a>
          </p>
          <img src={logo} alt="" />
        </div>

        <div className={module.dolyami + " " + module.mobile}>
          <img src={logoMobile} alt="" />
          <p>
            Как купить сегодня, <br />a заплатить только 25%
          </p>
          <Button
            className={module["dolyami-button"]}
            onClick={() => setActiveState(!activeState)}
          >
            Подробнее
          </Button>
        </div>
      </div>

      <Popup
        {...{ activeState, setActiveState }}
        dolyamiBoolean
        crossBoolean={false}
        headText="оплатите 25% от стоимости покупки"
        beforeHeadTextBoolean
        beforeHeadTextContent={
          <>
            <img
              src={badge}
              className={module.desktop + " " + module.dolyami__logo}
            />
            <img
              src={badgeMobile}
              className={module.mobile + " " + module.dolyami__logo}
            />
          </>
        }
        className={module.dolyami__popup}
        containerClassName={module["dolyami__popup-container"]}
      >
        <p className={module.dolyami_grey}>
          Оставшиеся 3 части спишутся автоматически с шагом в две недели
        </p>
        <div className={module["dolyami-icon-row"]}>
          <div className={module["dolyami-icon__column"]}>
            <img src={starsIcon} alt="" />
            <p>Без процентов и комиссий</p>
          </div>

          <div className={module["dolyami-icon__column"]}>
            <img src={walletIcon} alt="" />
            <p>Как обычная оплата картой</p>
          </div>
        </div>

        <div className={module.dolyami__payment}>
          <div
            className={module.dolyami__item + " " + module.dolyami__item_active}
          >
            <p>Сегодня</p>
            <p>2 040 ₽</p>
            <div className={module.dolyami__line}></div>
          </div>
          <div className={module.dolyami__item}>
            <p>24 дек</p>
            <p>2 040 ₽</p>
            <div className={module.dolyami__line}></div>
          </div>
          <div className={module.dolyami__item}>
            <p>7 янв</p>
            <p>2 040 ₽</p>
            <div className={module.dolyami__line}></div>
          </div>
          <div className={module.dolyami__item}>
            <p>21 янв</p>
            <p>2 040 ₽</p>
            <div className={module.dolyami__line}></div>
          </div>
        </div>

        <p className={module.dolyami_grey}>
          Подробнее о сервисе можно узнать на{" "}
          <a href="https://dolyame.ru">dolyame.ru</a>
        </p>
      </Popup>
    </>
  );
}

export default Dolyami;
