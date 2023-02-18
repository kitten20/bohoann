import Button from "../../../components/Button";

import module from "./style.module.scss";

function TryAll({ row = 1 }) {
  const Try2 = () => (
    <div className={module.try__row}>
      <div className={module.try__column}>
        <p>
          С Bohoann вы можете создать свой уникальный дизайн изделия с помощью
          сервиса <strong>Ring bar.</strong>
        </p>
      </div>

      <div className={module.try__column}>
        <Button className={module.try__button}>
          попробовать сервис ring bar
        </Button>
      </div>
    </div>
  );

  return row === 1 ? (
    <div className={module.try}>
      <div className={module.try__row}>
        <div className={module.try__column}>
          <p>Примерьте их все.</p>
        </div>

        <div className={module.try__column}>
          <Button className={module.try__button}>
            смотреть украшения для блеска глаз
          </Button>
        </div>
      </div>
      <div className={module.try__row + " " + module.desktop}>
        <div className={module.try__column}>
          <p>
            С Bohoann вы можете создать свой уникальный дизайн изделия с помощью
            сервиса <strong>Ring bar.</strong>
          </p>
        </div>

        <div className={module.try__column}>
          <Button className={module.try__button}>
            попробовать сервис ring bar
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <Try2 />
  );
}

export default TryAll;
