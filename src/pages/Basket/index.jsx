import MainCard from "../../components/MainCard";
import Items from "./Items";
import Fields from "./Fields";
import Delivery from "./Delivery";
import Payment from "./Payment";

import module from "./style.module.scss";

function Basket() {
  const products = [1, 2, 3, 4, 1, 2, 3, 4];

  return (
    <>
      <MainCard headText="корзина" className={module.half}>
        <Items />
      </MainCard>

      <MainCard headText="оформление" className={module.half}>
        <Fields />
      </MainCard>

      <MainCard headText="доставка" className={module.half}>
        <Delivery />
      </MainCard>

      <MainCard headText="оплата" className={module.half}>
        <Payment />
      </MainCard>

      <MainCard
        headText="рекомендуем"
        productsSliderBoolean
        swiperBoolean
        headSwiperPagination
        products={products}
      ></MainCard>
    </>
  );
}

export default Basket;
