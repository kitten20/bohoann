import MainCard from "../../components/MainCard";
import Button from "../../components/Button";

import module from "./style.module.scss";

import iphone from "./assets/iphone.png";
import hands from "./assets/hands.svg";

function OnlineTest() {
  return (
    <>
      <MainCard headText="онлайн-примерка" className={module.online}>
        <div className={module.online__row}>
          <div className={module.online__column}>
            <img src={iphone} alt="" />
          </div>
          <div className={module.online__column}>
            <p>
              Узнайте, как украшение будет смотреться на вашей руке за 15 минут!
            </p>
            <p>
              3 примерки - бесплатно
              <br />5 примерок - 500Р
              <br />
              10 примерок - 1000Р
            </p>
          </div>
        </div>
        <div className={module.online__row}>
          <div className={module.online__column}>
            <div className={module.online__li}>
              <h2>1</h2>

              <h4>Сфотографируйте руку</h4>
              <p>Выберите максимально нейтральный фон, а лучше белый!</p>
              <p>
                Вытяните руку перед камерой и расставьте пальцы, как показано на
                фото в подсказке.
              </p>
              <img src={hands} alt="" />
            </div>
            <div className={module.online__li}>
              <h2>2</h2>

              <h4>Выберите понравившиеся модели</h4>
              <p>
                В нашем Instagram и на сайте есть много фотографий с кольцами,
                просто выберите, какие из них вы хотели бы примерить, и сделайте
                скриншот.
              </p>
            </div>
          </div>
          <div className={module.online__column}>
            <div className={module.online__li}>
              <h2>3</h2>
              <h4>Уточните свой размер пальца</h4>
              <p>
                Чтобы примерка была более точной, нашим дизайнерам необходимо
                знать размер вашего пальца.
              </p>
            </div>

            <div className={module.online__li}>
              <h2>4</h2>
              <h4>Отправьте информацию и фото менеджерам</h4>
              <p>
                Готово?
                <br />
                Теперь просто отправьте фото руки, размер пальца и ваши
                пожелания менеджерам bohoann.
                <br />
                Результат мы пришлём вам в обратном сообщении.
              </p>
            </div>

            <Button type="black" className={module.online__button}>
              отправить фото для примерки
            </Button>
          </div>
        </div>
      </MainCard>
    </>
  );
}

export default OnlineTest;
