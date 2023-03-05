import { useServerStore } from "../../store";

import MainCard from "../../components/MainCard";
import Dolyami from "../../components/Dolyami";
import Button from "../../components/Button";

import module from "./style.module.scss";

function Purchase() {
  const { serverData } = useServerStore();
  const yandexSplitHref = serverData[0]?.mainLinks[0];

  return (
    <>
      <MainCard headText="забери сейчас, оплати потом">
        <p className={module.para}>
          Чтобы стать обладателем драгоценных эмоций bohoann, не обязательно
          платить всю сумму сразу. Мы предлагаем несколько способов оплаты по
          частям от надежных партнеров бренда. Выбирайте удобный!
        </p>

        <Dolyami className={module.button} />

        <div className={module["button-container"]}>
          <Button className={module.button} linkBoolean route={yandexSplitHref.yandexSplit}>
            яндекс сплит
          </Button>
        </div>
      </MainCard>
    </>
  );
}

export default Purchase;
