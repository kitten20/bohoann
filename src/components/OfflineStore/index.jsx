import MapComponent from "../Map";

import module from "./style.module.scss";

function OfflineStore() {
  return (
    <div className={module["offline-store"]}>
      <div className={module["offline-store__column"]}>
        <div className={module["offline-store__row"]}>
          <p>
            <strong>
              Москва
              <br />
              Садово-Черногрязская 3Бс1
            </strong>
            <span>
              <br />
              12:00 - 21:00, выходной вс-пн
            </span>
          </p>
          <p>м. Красные Ворота, 5 минут пешком паркинг 150Р в час</p>
          <p>тел. +7 900 620 88 77</p>
        </div>
        <div className={module["offline-store__row"]}>
          <p>
            <strong>
              Санкт-петербург
              <br />
              рылеева 33
            </strong>
            <br />
            <span>10:00 - 21:00 ежедневно</span>
          </p>
          <p>м. Чернышевская, 5 минут пешком паркинг 100Р в час</p>
          <p>тел. +7 812 250 8 777</p>
        </div>
      </div>
      <div className={module["offline-store__column"]}>
        <MapComponent className={module["offline-store-map"]} />
      </div>
    </div>
  );
}

export default OfflineStore;
