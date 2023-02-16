import module from "./style.module.scss";

import logo from "./assets/logo.svg";

function Dolyami() {
  return (
    <>
      <div className={module.dolyami}>
        <p>
          Купи сейчас, плати потом. <a href="#">Подробнее</a>
        </p>
        <img src={logo} alt="" />
      </div>
    </>
  );
}

export default Dolyami;
