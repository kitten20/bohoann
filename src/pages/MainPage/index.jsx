import MainSlider from "./MainSlider";
import CategoriesSlider from "../../components/CategoriesSlider";
import MainCard from "../../components/MainCard";
import CollectionsSlider from "../../components/CollectionsSlider";
import RingBar from "../../components/RingBar";
import OfflineStore from "../../components/OfflineStore";
import QuestionAnswer from "../../components/QuestionAnswer";
import AboutSlider from "../../components/AboutSlider";
import ShortInfo from "../../components/ShortInfo";

import module from "./style.module.scss";

function MainPage() {
  const products = [0, 1, 2, 3, 4];
  const productsGold = [4, 4, 4, 4, 4, 4];

  return (
    <>
      <MainSlider />

      <CategoriesSlider />

      <MainCard
        headText="бестселлеры"
        swiperBoolean
        productsSliderBoolean
        {...{ products }}
      />

      <MainCard
        headText="категории"
        swiperBoolean
        headLinkBoolean
        headLinkText="перейти в полный каталог"
        categoriesBoolean
        {...{ products }}
      />

      <MainCard
        headText="золото 585 -750"
        swiperBoolean
        productsSliderBoolean
        className={module.card_gold}
        headClassName={module["card-head_gold"]}
        productClassName={module.card_gold__product}
        products={productsGold}
      />

      <MainCard
        headText="коллекции"
        headLinkBoolean
        headLinkText="посмотреть все"
        products={productsGold}
        onlyHeadPaddingBoolean
      >
        <CollectionsSlider />
      </MainCard>

      <MainCard headText="ring-bar">
        <RingBar />
      </MainCard>

      <MainCard
        headText="рекомендации стилиста"
        swiperBoolean
        productsSliderBoolean
        {...{ products }}
      />

      <MainCard
        className={module["offline-store_main"]}
        headText="Bohoann offline store"
      >
        <OfflineStore />
      </MainCard>

      <MainCard headText="вопрос ответ">
        <QuestionAnswer />
      </MainCard>

      <MainCard headText="о бренде bohoann" onlyHeadPaddingBoolean>
        <AboutSlider />
      </MainCard>

      <MainCard headBoolean={false}>
        <ShortInfo />
      </MainCard>
    </>
  );
}

export default MainPage;
