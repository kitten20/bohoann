import AccordionComponent from "../../components/AccordionComponent";
import Dolyami from "../../components/Dolyami";
import MainCard from "../../components/MainCard";
import Info from "./Info";

import module from "./style.module.scss";

function ItemCard() {
  const products = [1, 2, 3, 4, 1, 2, 3, 4];
  const items = [
    {
      headText: "подробные характеристики",
      bodyText:
        "Ответ ответ ответответответ ответответот ответ ответответ ответ ответ ответ ответответот ответ ответответ ответ ответ  ответответ ",
    },
    {
      headText: "металл",
      bodyText:
        "Ответ ответ ответответответ ответответот ответ ответответ ответ ответ ответ ответответот ответ ответответ ответ ответ  ответответ ",
    },
    {
      headText: "вес",
      bodyText:
        "Ответ ответ ответответответ ответответот ответ ответответ ответ ответ ответ ответответот ответ ответответ ответ ответ  ответответ ",
    },
    {
      headText: "Уход",
      bodyText:
        "Ответ ответ ответответответ ответответот ответ ответответ ответ ответ ответ ответответот ответ ответответ ответ ответ  ответответ ",
    },
  ];

  return (
    <>
      <MainCard headBoolean={false} className={module.bread}>
        <p>Каталог / Каффы / Кафф базовый</p>
      </MainCard>

      <MainCard headBoolean={false}>
        <Info />
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
        {...{ products }}
      ></MainCard>
      <MainCard headBoolean={false}>
        <Dolyami />
      </MainCard>
    </>
  );
}

export default ItemCard;
