import MainCard from "../../components/MainCard";
import Dolyami from "../../components/Dolyami";
import Button from "../../components/Button";

import module from "./style.module.scss";

function Purchase() {
  return (
    <>
      <MainCard headText="забери сейчас, оплати потом">
        <p className={module.para}>
          Чтобы стать обладателем драгоценных эмоций bohoann, не обязательно
          платить всю сумму сразу. Мы предлагаем несколько способов оплаты по
          частям от надежных партнеров бренда. Выбирайте удобный!
        </p>

        <Dolyami />

        <div className={module["button-container"]}>
          <Button className={module.button}>яндекс сплит</Button>
        </div>
      </MainCard>
    </>
  );
}

export default Purchase;
