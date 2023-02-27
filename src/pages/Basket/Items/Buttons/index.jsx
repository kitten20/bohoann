import Button from "../../../../components/Button";

import module from "./style.module.scss";

function Buttons() {
  return (
    <>
      <div className={module["input-row"]}>
        <input type="text" placeholder="ввести промокод, если есть" />
        <Button className={module.button}>применить</Button>
      </div>

      <div className={module["buttons-column"]}>
        <Button type="black" className={module.button}>быстрый заказ</Button>
        <Button className={module.button}>перезвонить мне</Button>
      </div>
    </>
  );
}

export default Buttons;
