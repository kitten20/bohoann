import module from "./style.module.scss";

function ItemsBlock({
  number = 0,
  item = "",
  price = 0,
  lastPrice = 0,
  items = [],
}) {
  const toLocalString = (i) => i.toLocaleString("ru-RU");

  return (
    <div className={module["cheque-block"]}>
      {items?.map((i, index) => (
        <div className={module.item}>
          <div className={module.head}>
            <div className={module.number}>
              <p>товар {index + 1}</p>
            </div>
            <div className={module.prices}>
              <p className={module.price}>{toLocalString(i?.price)} Р</p>
              {i?.lastPrice !== 0 && i?.price !== i?.lastPrice ? (
                <p className={module.price_last}>
                  {toLocalString(i?.lastPrice)} Р
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
              <strong>29 977 Р</strong>
            </p>
            {true ? (
              <p className={module.price_last}>59 997 Р</p>
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
            <span>30 000 P</span>
            <span></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemsBlock;
