import { useServerStore, useStore } from "../../store";

import AccordionComponent from "../../components/AccordionComponent";
import Dolyami from "../../components/Dolyami";
import MainCard from "../../components/MainCard";
import Info from "./Info";

import module from "./style.module.scss";

function ItemCard() {
  const { serverData } = useServerStore();
  const { addNewItem } = useStore();

  const products = serverData[0]?.similarItems;

  const recommendations = serverData[0]?.itemRecommendations;

  const itemCard = serverData[0]?.itemCard[0];
  const itemCardData = itemCard?.itemCardData[0];

  const items = itemCard?.accordionItems;

  return (
    <>
      <MainCard headBoolean={false} className={module.bread}>
        <p>{itemCard?.breadcrumbs}</p>
      </MainCard>

      <MainCard headBoolean={false}>
        <Info {...{ itemCardData, addNewItem }} />
      </MainCard>

      <MainCard headBoolean={false}>
        <AccordionComponent
          {...{ items }}
          className={module.accordion}
          classNameBody={module.accordion__body}
          classNameHead={module.accordion__head}
        />
      </MainCard>

      <MainCard
        headText="похожие украшения"
        productsSliderBoolean
        swiperBoolean
        headSwiperPagination
        className={module.card_grey}
        productClassName={module.card_grey__item}
        {...{ products }}
      ></MainCard>
      <MainCard
        headText="рекомендуем"
        productsSliderBoolean
        swiperBoolean
        headSwiperPagination
        products={recommendations}
      ></MainCard>
      <MainCard headBoolean={false}>
        <Dolyami />
      </MainCard>
    </>
  );
}

export default ItemCard;
