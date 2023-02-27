import { useServerStore } from "../../store";

import MainCard from "../../components/MainCard";
import NavBar from "./NavBar";
import ProductsSlider from "../../components/ProductsSlider";
import GridCategories from "./GridCategories";
import RingBar from "../../components/RingBar";
import Dolyami from "../../components/Dolyami";
import OfflineStore from "../../components/OfflineStore";

import module from "./style.module.scss";

import banner from "./assets/background.png";

function Categories() {
  const { serverData } = useServerStore();

  const products = serverData[0]?.specialCatalogue;

  return (
    <>
      <img src={banner} alt="" className={module.banner} />

      <MainCard headText="категории">
        <NavBar />
      </MainCard>

      <MainCard headText="особенное" className={module.special}>
        <ProductsSlider
          itemsArray={products}
          productClassName={module.product}
        />
      </MainCard>

      <MainCard headBoolean={false}>
        <GridCategories {...{ serverData }} />
      </MainCard>

      <MainCard headText="кастомизация">
        <RingBar />
      </MainCard>

      <MainCard headBoolean={false}>
        <Dolyami />
      </MainCard>

      <MainCard headText="Bohoann offline store" onlyHeadPaddingBoolean>
        <OfflineStore />
      </MainCard>
    </>
  );
}

export default Categories;
