import Checkbox from "../Checkbox";

import module from "./style.module.scss";

function Delivery() {
  const checkboxes = [
    {
      item: "Бесплатная доставка от 12 000 Р",
    },
    {
      item: "Почта РФ - стоимость 300 Р",
    },
    {
      item: "Самовывоз в Санкт-Петербурге и Москве",
    },
    {
      item: "СДЭК - оплата доставки при получении",
    },
  ];

  return (
    <>
      <div className={module.gradient}>
        <h3>
          купите еще на 9999 Р
          <br />
          для бесплатой доставки
        </h3>
      </div>
      <div className={module.checkboxes}>
        {checkboxes.map((i, index) => (
          <Checkbox key={index} item={i.item} />
        ))}
      </div>
    </>
  );
}

export default Delivery;
