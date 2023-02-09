import module from "./style.module.scss";

import logo from "./assets/logo.svg";
import icon_first from "./assets/icons/1.svg";
import icon_second from "./assets/icons/2.svg";
import icon_third from "./assets/icons/3.svg";

function Header() {
  return (
    <header>
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
          <img src={icon_second} alt="" />
        </a>
        <a href="">
          <img src={icon_third} alt="" />
        </a>
      </div>

      <a href="">меню</a>
    </header>
  );
}

export default Header;
