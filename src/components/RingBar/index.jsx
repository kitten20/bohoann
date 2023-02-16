import Button from "../Button";

import module from "./style.module.scss";

import ringSvg from "./assets/youtube.svg";

function RingBar() {
  return (
    <div className={module.ring}>
      <div className={module.ring__column}>
        <img src={ringSvg} alt="" />
      </div>
      <div className={module.ring__column}>
        <p>
          Капсульная коллекция серёг, браслетов, колец и кулонов по матрице из
          наших авторских текстур: гладкая, битая, россыпь бриллиантов, бархат и
          мелкие шарики.
        </p>
        <p>
          Теперь вы сами можете стать дизайнером своего украшения, комбинируя
          количество и текстуру колец.
        </p>
        <ol>
          <li>Выберите от 2 до 15 текстурных основ из матрицы.</li>
          <li>Получите визуализацию будущего кольца от нашего менеджера.</li>
          <li>Завершите оформление заказа.</li>
          <li>Получите кольцо в собственном дизайне.</li>
        </ol>
        <Button>перейти в раздел</Button>
      </div>
    </div>
  );
}

export default RingBar;
