import Dolyami from "../../components/Dolyami";
import MainCard from "../../components/MainCard";
import Info from "./Info";

import module from "./style.module.scss";

function ItemCard() {
  const products = [1, 2, 3, 4, 1, 2, 3, 4];

  return (
    <>
      <MainCard headBoolean={false}>
        <p>Каталог / Каффы / Кафф базовый</p>
      </MainCard>

      <MainCard headBoolean={false}>
        <Info />
      </MainCard>

      <MainCard
        headText="похожие украшения"
        productsSliderBoolean
        swiperBoolean
        headSwiperPagination
        className={module.card_grey}
        {...{ products }}
      ></MainCard>
      <MainCard
        headText="рекомендуем"
        productsSliderBoolean
        swiperBoolean
        headSwiperPagination
        {...{ products }}
      ></MainCard>
      <MainCard headBoolean={false}>
        <Dolyami />
      </MainCard>
    </>
  );
}

export default ItemCard;
