import MainSlider from "./MainSlider";
import CategoriesSlider from "../../components/CategoriesSlider";
import MainCard from "../../components/MainCard";
import ProductsSlider from "../../components/ProductsSlider";

function MainPage() {
  const products = [0, 1, 2, 3];

  return (
    <>
      <MainSlider />
      <CategoriesSlider />
      <MainCard
        headText="бестселлеры"
        swiperBoolean
        headLinkBoolean
        headLinkText="перейти в полный каталог"
        
      >
        <ProductsSlider itemsArray={products} />
      </MainCard>
    </>
  );
}

export default MainPage;
