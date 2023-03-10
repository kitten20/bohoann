import { useServerStore } from "../../store";

import MainCard from "../../components/MainCard";
import Button from "../../components/Button";

import module from "./style.module.scss";

function Sertificate() {
  const { serverData } = useServerStore();

  const products = serverData[0]?.sertificateChoose;

  return (
    <>
      <MainCard headText="Сертификаты" className={module.sertificate__card}>
        <p>Идеальный и самый универсальный подарок - сертификат bohoann!</p>
        <p>
          Вам не нужно думать над размером или над тем, какое украшение выбрать.
          Позвольте Вашим близким сделать это самим!
        </p>
        <p>
          Приобрести сертификат можно как онлайн, так и офлайн в наших бутиках в
          Санкт-Петербурге и в Москве.
        </p>
        <p>
          После оплаты сертификата онлайн с Вами свяжется наш менеджер для
          уточнения деталей. Мы можем направить его сразу получателю с
          пожеланиями от Вас или упаковать в конверт и отправить его физически.
        </p>
        <p>Все детали можно обсудить с персональным менеджером.</p>
      </MainCard>

      <MainCard headText="Как применить сертификат?">
        <p>
          Вам будет предоставлен персональный номер, который вводится при
          оформлении заказа на сайте.
        </p>
        <p>
          На сертификат можно купить любые украшения bohoann, даже те, на
          которые действует скидка.
        </p>
        <p>
          Применить сертификат можно на сайте или в розничном магазине. Для
          этого будет нужно знать персональный номер или принести сертификат с
          собой.
        </p>
        <p>
          А так же обратите внимание, что на сертификаты номиналом от 10.000р
          идет дополнительный бонус.
        </p>
      </MainCard>

      <MainCard
        productsSliderBoolean
        swiperBoolean
        headSwiperPagination
        headText="Выберите сертификат"
        {...{ products }}
      ></MainCard>

      <div className={module["button-container"]}>
        <Button linkBoolean route="/categories">перейти в каталог</Button>
      </div>
    </>
  );
}

export default Sertificate;
