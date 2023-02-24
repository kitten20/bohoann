import MainCard from "../../components/MainCard";

import module from './style.module.scss'

function Basket() {
  const products = [1, 2, 3, 4, 1, 2, 3, 4];

  return (
    <>
    <MainCard headText="корзина" className={module.half}>
      
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
