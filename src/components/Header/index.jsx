import { useState } from "react";

import module from "./style.module.scss";

import logo from "./assets/logo.svg";
import logoShort from "./assets/logo-short.svg";
import icon_first from "./assets/icons/1.svg";
import icon_second from "./assets/icons/2.svg";
import icon_third from "./assets/icons/3.svg";

function Header() {
  const [linksChecked, setLinksChecked] = useState(false);

  return (
    <>
      <header className={module.desktop}>
        <a href="">
          <img src={logo} alt="" />
        </a>

        <div className={module["header-links"]}>
          <a href="">каталог</a>
          <a href="">коллекции</a>
          <a href="">о бренде</a>
          <a href="">кастомизация</a>
          <a href="">онлайн-примерка</a>
        </div>
        <div className={module["header-icons"]}>
          <a href="">
            <img src={icon_first} alt="" />
          </a>
          <a href="">
            <img src={icon_third} alt="" />
          </a>
          <a href="">
            <img src={icon_second} alt="" />
          </a>
        </div>
        <a href="">меню</a>
      </header>

      <header className={module.adaptive}>
        <a href="">
          <img src={logo} alt="" />
        </a>

        {linksChecked && (
          <div className={module["header-links"]}>
            <span>
              <h2>меню</h2>
            </span>

            <div className={module["header-banner"]}>
              <h3>купите на 9999 и заберите базовое кольцо в подарок</h3>
            </div>

            <span>
              <a href="">каталог</a>
              <a href="">коллекции</a>
              <a href="">онлайн-примерка</a>
              <a href="">кастомизация</a>
              <a href="">доставка</a>
              <a href="">гарантии</a>
              <a href="">о бренде</a>
              <a href="">акции</a>
              <a href="">контакты</a>
            </span>
          </div>
        )}

        <div className={module["header-burger-container"]}>
          <div className={module["header-icons"]}>
            <a href="">
              <img src={icon_first} alt="" />
            </a>
            <a href="">
              <img src={icon_third} alt="" />
            </a>
            <a href="">
              <img src={icon_second} alt="" />
            </a>
          </div>
          <button
            className={module["header-burger"]}
            onClick={() => setLinksChecked(!linksChecked)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <header className={module.mobile}>
        <a href="">
          <img src={logoShort} alt="" />
        </a>

        {linksChecked && (
          <div className={module["header-links"]}>
            <span>
              <h2>меню</h2>
            </span>

            <div className={module["header-banner"]}>
              <h3>купите на 9999 и заберите базовое кольцо в подарок</h3>
            </div>

            <span>
              <a href="">каталог</a>
              <a href="">коллекции</a>
              <a href="">онлайн-примерка</a>
              <a href="">кастомизация</a>
              <a href="">доставка</a>
              <a href="">гарантии</a>
              <a href="">о бренде</a>
              <a href="">акции</a>
              <a href="">контакты</a>
            </span>
          </div>
        )}

        <div className={module["header-burger-container"]}>
          <div className={module["header-icons"]}>
            <a href="">
              <img src={icon_first} alt="" />
            </a>
            <a href="">
              <img src={icon_third} alt="" />
            </a>
            <a href="">
              <img src={icon_second} alt="" />
            </a>
          </div>
          <button
            className={module["header-burger"]}
            onClick={() => setLinksChecked(!linksChecked)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
