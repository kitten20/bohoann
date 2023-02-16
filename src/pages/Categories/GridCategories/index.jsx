import ProductCard from "../../../components/ProductCard";
import Button from "../../../components/Button";

import module from "./style.module.scss";

import arrowDown from "./assets/arrowDown.svg";

function GridCategories() {
  const items = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];

  return (
    <div className={module.categories_grid}>
      <div className={module["categories_grid-header"]}>
        <div className={module["categories_grid-header__column"]}>
          <p>
            <span>ФИЛЬТР</span>
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
          <ProductCard imageIndex={i} key={index} />
        ))}
      </div>
      <Button className={module.button_centered}>показать еще</Button>
    </div>
  );
}

export default GridCategories;
