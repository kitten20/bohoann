import useStore from "../../../../store";

import module from "./style.module.scss";

function ItemsBlock({
  number = 0,
  item = "",
  price = 0,
  lastPrice = 0,
  items = [],
}) {
  const toLocalString = (i) => i.toLocaleString("ru-RU");
  const { basket } = useStore();
  let basketPrice = basket.reduce((p, c) => (p += c.price), 0);
  let basketLastPrice = basket.reduce((p, c) => (p += c.lastPrice), 0);

  return (
    <div className={module["cheque-block"]}>
      {basket?.map((i, index) => (
        <div className={module.item}>
          <div className={module.head}>
            <div className={module.number}>
              <p>товар {index + 1}</p>
            </div>
            <div className={module.prices}>
              <p className={module.price}>{toLocalString(i.price)} Р</p>
              {i.lastPrice !== 0 && i.price !== i.lastPrice ? (
                <p className={module.price_last}>
                  {toLocalString(i.lastPrice)} Р
                </p>
              ) : (
                <span></span>
              )}
            </div>
          </div>
          <div>
            <p>{i?.item}</p>
          </div>
        </div>
      ))}

      <div className={module.item}>
        <div className={module.head}>
          <div className={module.number}>
            <p>
              <strong>ИТОГО</strong>
            </p>
          </div>
          <div className={module.prices}>
            <p className={module.price}>
              <strong>{toLocalString(basketPrice)} P</strong>
            </p>
            {true ? (
              <p className={module.price_last}>{toLocalString(basketLastPrice)} Р</p>
            ) : (
              <span></span>
            )}
          </div>
        </div>
        <div className={module.footer}>
          <p className={module.number}>
            <span>Сумма скидок и акций</span>
          </p>
          <p className={module.prices}>
            <span>{toLocalString(basketLastPrice - basketPrice)} P</span>
            <span></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemsBlock;
