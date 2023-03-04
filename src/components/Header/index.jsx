import { useState } from "react";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <div className={module["header-links"]}>
          <Link to="/categories">каталог</Link>
          <Link to="/collections">коллекции</Link>
          <Link to="/about">о бренде</Link>
          <Link to="/">кастомизация</Link>
          <Link to="/online-test">онлайн-примерка</Link>
        </div>
        <div className={module["header-icons"]}>
          <Link to="/">
            <img src={icon_first} alt="" />
          </Link>
          <Link to="/">
            <img src={icon_third} alt="" />
          </Link>
          <Link to="/basket">
            <img src={icon_second} alt="" />
          </Link>
        </div>
        <Link to="/">меню</Link>
      </header>

      <header className={module.adaptive}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        {linksChecked && (
          <div className={module["header-links"]}>
            <span>
              <h2>меню</h2>
            </span>

            <div className={module["header-banner"]}>
              <h3>купите на 9999 и заберите базовое кольцо в подарок</h3>
            </div>

            <span>
              <Link to="/categories">каталог</Link>
              <Link to="/collections">коллекции</Link>
              <Link to="/online-test">онлайн-примерка</Link>
              <Link to="/">кастомизация</Link>
              <Link to="/">доставка</Link>
              <Link to="/">гарантии</Link>
              <Link to="/about">о бренде</Link>
              <Link to="/">акции</Link>
              <Link to="/contacts">контакты</Link>
            </span>
          </div>
        )}

        <div className={module["header-burger-container"]}>
          <div className={module["header-icons"]}>
            <Link to="/">
              <img src={icon_first} alt="" />
            </Link>
            <Link to="/">
              <img src={icon_third} alt="" />
            </Link>
            <Link to="/basket">
              <img src={icon_second} alt="" />
            </Link>
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
        <Link to="/">
          <img src={logoShort} alt="" />
        </Link>

        {linksChecked && (
          <div className={module["header-links"]}>
            <span>
              <h2>меню</h2>
            </span>

            <div className={module["header-banner"]}>
              <h3>купите на 9999 и заберите базовое кольцо в подарок</h3>
            </div>

            <span>
              <Link to="/catalogue">каталог</Link>
              <Link to="/collections">коллекции</Link>
              <Link to="/online-test">онлайн-примерка</Link>
              <Link to="/">кастомизация</Link>
              <Link to="/">доставка</Link>
              <Link to="/">гарантии</Link>
              <Link to="/about">о бренде</Link>
              <Link to="/">акции</Link>
              <Link to="/contacts">контакты</Link>
            </span>
          </div>
        )}

        <div className={module["header-burger-container"]}>
          <div className={module["header-icons"]}>
            <Link to="/">
              <img src={icon_first} alt="" />
            </Link>
            <Link to="/">
              <img src={icon_third} alt="" />
            </Link>
            <Link to="/basket">
              <img src={icon_second} alt="" />
            </Link>
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
