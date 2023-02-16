import Button from "../../../components/Button";

import module from "./style.module.scss";

function TryAll() {
  return (
    <div className={module.try}>
      <div className={module.try__row}>
        <div className={module.try__column}>
          <p>Примерьте их все.</p>
        </div>

        <div className={module.try__column}>
          <Button className={module.try__button}>смотреть украшения для блеска глаз</Button>
        </div>
      </div>
      <div className={module.try__row}>
        <div className={module.try__column}>
          <p>
            С Bohoann вы можете создать свой уникальный дизайн изделия с помощью
            сервиса <strong>Ring bar.</strong>
          </p>
        </div>

        <div className={module.try__column}>
          <Button className={module.try__button}>попробовать сервис ring bar</Button>
        </div>
      </div>
    </div>
  );
}

export default TryAll;
