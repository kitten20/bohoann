import InputField from "../../../components/InputField";
import Button from "../../../components/Button";

import module from "./style.module.scss";

function Textus() {
  const fields = [
    {
      headText: "ФИО",
    },
    {
      headText: "телефон",
    },
    {
      headText: "e-mail",
    },
    {
      headText: "удобный мессенджер для связи",
    },
  ];

  return (
    <div className={module.row}>
      <div className={module.column}>
        <p className={module.description}>
          Напишите ваш вопрос, мы перезвоним или ответим в мессенджер{" "}
        </p>

        <div>
          {fields.map((i, index) => (
            <InputField inputHeadText={i.headText} key={index} />
          ))}
        </div>
      </div>

      <div className={module.column}>
        <div className={module["column-checkbox"]}>
          <input type="checkbox" name="" id="" />
          <a href="">
            Я прочитал(а) и принимаю условия оферты и обработки персональных
            данных*
          </a>
        </div>
        <Button>отправить</Button>
      </div>
    </div>
  );
}

export default Textus;
