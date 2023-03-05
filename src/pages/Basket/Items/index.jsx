import Dolyami from "../../../components/Dolyami";
import ItemsBlock from "./ItemsBlock";
import Buttons from "./Buttons";

import module from "./style.module.scss";

function Items() {
  return (
    <>
      <div className={module.gradient}>
        <h3>
          купите еще на 9999 Р
          <br />и заберите кольцо в подарок
        </h3>
      </div>

      <div className={module["basket-items"]}>
        <ItemsBlock  />
        <Dolyami />
      </div>

      <div className={module.buttons}>
        <Buttons />
      </div>
    </>
  );
}

export default Items;
