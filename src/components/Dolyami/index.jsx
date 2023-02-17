import Button from "../Button";

import module from "./style.module.scss";

import logo from "./assets/logo.svg";
import logoMobile from "./assets/logo_mobile.svg";

function Dolyami() {
  return (
    <>
      <div className={module["dolyami-container"]}>
        <div className={module.dolyami + " " + module.desktop}>
          <p>
            Купи сейчас, плати потом. <a href="#">Подробнее</a>
          </p>
          <img src={logo} alt="" />
        </div>

        <div className={module.dolyami + " " + module.mobile}>
          <img src={logoMobile} alt="" />
          <p>
            Как купить сегодня, <br />a заплатить только 25%
          </p>
          <Button className={module["dolyami-button"]}>Подробнее</Button>
        </div>
      </div>
    </>
  );
}

export default Dolyami;
