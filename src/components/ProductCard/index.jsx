import module from "./style.module.scss";

import first from "./assets/1.png";
import second from "./assets/2.png";
import third from "./assets/3.png";
import fourth from "./assets/4.png";
import fifth from "./assets/5.png";
import heartIcon from "./assets/heart.svg";

function ProductCard({ imageIndex = 0 }) {
  const images = [
    {
      image: first,
    },
    {
      image: second,
    },
    {
      image: third,
    },
    {
      image: fourth,
    },
    {
      image: fifth,
    },
  ];

  return (
    <div className={module.product}>
      <div className={module.product__head}>
        <img
          src={images[imageIndex].image}
          alt=""
          className={module.product__image_main}
        />
        <button className={module.product__heart}>
          <img src={heartIcon} alt="" />
        </button>
      </div>

      <div className={module.product__body}>
        <p>категория товара</p>
        <h5>название этого товара в несколько слов</h5>
        <p>
          <strong>9 999 Р</strong>
          <span>19 999 Р</span>
        </p>

        <div className={module["product-buttons"]}>
          <button className={module.product__button_black}>
            быстрый заказ
          </button>
          <button className={module.product__button_white}>в корзину</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
