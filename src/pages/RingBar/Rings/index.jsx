import RingType from "../RingType";
import Button from "../../../components/Button";

import module from "./style.module.scss";

import ring from "./assets/ring.svg";

function Rings() {
  const rings = [
    { type: "гладкое", img: ring },
    { type: "битое", img: ring },
    { type: "фатурное", img: ring },
    { type: "бархатное", img: ring },
    { type: "шарики", img: ring },
  ];

  return (
    <div>
      <div className={module.grid}>
        {rings.map((i, index) => (
          <RingType key={index} img={i.img} type={i.type} />
        ))}
        <div className={module.info + " " + module.mobile}>
            <p>
                <span>Всего колец</span>
                <span>5</span>
                <span>сумма заказа</span>
                <span>5900 Р</span>
            </p>
        </div>
      </div>

      <div className={module.create}>
        <p className={module.description + " " + module.desktop}>
          ВСЕГО КОЛЕЦ <span>5</span>
        </p>
        <p className={module.description + " " +module.description_2 + " " + module.desktop}>
          СУММА ЗАКАЗА <span>5900 P</span>
        </p>

        <Button className={module.button} type="black">
          оформить заказ
        </Button>
      </div>
    </div>
  );
}

export default Rings;
