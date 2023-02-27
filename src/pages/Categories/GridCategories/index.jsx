import ProductCard from "../../../components/ProductCard";
import Button from "../../../components/Button";

import module from "./style.module.scss";

import arrowDown from "./assets/arrowDown.svg";
import filter from "./assets/filter.svg";

function GridCategories({ serverData = [] }) {
  const items = serverData?.gridCatalogue;

  return (
    <div className={module.categories_grid}>
      <div className={module["categories_grid-header"]}>
        <div className={module["categories_grid-header__column"]}>
          <p>
            <span className={module.desktop}>ФИЛЬТР</span>
            <img src={filter} alt="" className={module.mobile} />
          </p>
          <p>Материал</p>
          <p>Цвет</p>
          <p>Дру...</p>
        </div>
        <div className={module["categories_grid-header__column"]}>
          <p>
            По популярности <img src={arrowDown} alt="" />
          </p>
        </div>
      </div>
      <div className={module["categories-grid"]}>
        {items.map((i, index) => (
          <ProductCard
            imageIndex={i}
            key={index}
            className={module.categories__product}
          />
        ))}
      </div>
      <Button className={module.button_centered}>показать еще</Button>
    </div>
  );
}

export default GridCategories;
