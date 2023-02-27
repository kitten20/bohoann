import Checkbox from "../Checkbox";
import Button from "../../../components/Button";

import module from "./style.module.scss";

import dolyami from "./assets/dolyami.svg";

function Payment() {
  function DolyamiPayment() {
    return (
      <p className={module["dolyami-paragraph"]}>
        Оплата Долями <img src={dolyami} alt="" /> 4 платежа по 7 499 Р{" "}
        <a href="">подробнее</a>
      </p>
    );
  }

  const checkboxes = [
    { item: "Банковская карта VISA, Mastercard, Maestro или МИР" },
    {
      item: <DolyamiPayment />,
    },
  ];

  return (
    <>
      <div>
        {checkboxes.map((i, index) => (
          <Checkbox key={index} item={i.item} />
        ))}
      </div>

      <div className={module.background_grey}>
        <p>итого к оплате</p>
        <p>29 997 Р</p>
      </div>

      <div className={module.footer}>
        <Checkbox
        className={module.checkbox}
          item={
            <a>
              Я прочитал(а) и принимаю условия оферты и обработки персональных
              данных*
            </a>
          }
        />

        <Button className={module.button} type="black">
          подтвердить заказ и оплатить
        </Button>
      </div>
    </>
  );
}

export default Payment;
