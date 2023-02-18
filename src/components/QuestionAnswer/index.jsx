import { useState } from "react";

import Button from "../Button";
import AccordionComponent from "../AccordionComponent";
import Popup from "../Popup";
import InputField from "../InputField";

import module from "./style.module.scss";

import arrowDown from "./assets/arrow.svg";

function QuestionAnswer() {
  const [activeStateAsk, setActiveStateAsk] = useState(false);
  const [activeStateQuestion, setActiveStateQuestion] = useState(false);

  const items = [
    {
      headText: "как сделать заказ ?",
      bodyText:
        "Ответ ответ ответответответ ответответот ответ ответответ ответ ответ ответ ответответот ответ ответответ ответ  Ответ ответ ответответответ ответответот ответ ответответ ответ",
    },
    {
      headText: "вопрос",
      bodyText:
        "Ответ ответ ответответответ ответответот ответ ответответ ответ ответ ответ ответответот ответ ответответ ответ  Ответ ответ ответответответ ответответот ответ ответответ ответ",
    },
    {
      headText: "вопрос",
      bodyText:
        "Ответ ответ ответответответ ответответот ответ ответответ ответ ответ ответ ответответот ответ ответответ ответ  Ответ ответ ответответответ ответответот ответ ответответ ответ",
    },
    {
      headText: "вопрос",
      bodyText:
        "Ответ ответ ответответответ ответответот ответ ответответ ответ ответ ответ ответответот ответ ответответ ответ  Ответ ответ ответответответ ответответот ответ ответответ ответ",
    },
  ];

  const popupFields = [
    {
      headText: "фио",
    },
    {
      headText: "телефон",
    },
    {
      headText: "e-mail",
    },
    {
      headText: "ваш вопрос",
      inputBoolean: false,
    },
  ];

  const questions = [
    {
      headText: "как сделать заказ ?",
      bodyText:
        "Ответ ответ ответответответ ответответот ответ ответответ ответ ответ ответ ответответот ответ ответответ ответ ответ  ответответ ответ ответ ответ ответответот ответ ответответ ответ ответ ответ",
    },
    {
      headText: "вопрос",
      bodyText:
        "Ответ ответ ответответответ ответответот ответ ответответ ответ ответ ответ ответответот ответ ответответ ответ ответ  ответответ ответ ответ ответ ответответот ответ ответответ ответ ответ ответ",
    },
    {
      headText: "вопрос",
      bodyText:
        "Ответ ответ ответответответ ответответот ответ ответответ ответ ответ ответ ответответот ответ ответответ ответ ответ  ответответ ответ ответ ответ ответответот ответ ответответ ответ ответ ответ",
    },
    {
      headText: "вопрос",
      bodyText:
        "Ответ ответ ответответответ ответответот ответ ответответ ответ ответ ответ ответответот ответ ответответ ответ ответ  ответответ ответ ответ ответ ответответот ответ ответответ ответ ответ ответ",
    },
    {
      headText: "вопрос",
      bodyText:
        "Ответ ответ ответответответ ответответот ответ ответответ ответ ответ ответ ответответот ответ ответответ ответ ответ  ответответ ответ ответ ответ ответответот ответ ответответ ответ ответ ответ",
    },
    {
      headText: "вопрос",
      bodyText:
        "Ответ ответ ответответответ ответответот ответ ответответ ответ ответ ответ ответответот ответ ответответ ответ ответ  ответответ ответ ответ ответ ответответот ответ ответответ ответ ответ ответ",
    },
    {
      headText: "вопрос",
      bodyText:
        "Ответ ответ ответответответ ответответот ответ ответответ ответ ответ ответ ответответот ответ ответответ ответ ответ  ответответ ответ ответ ответ ответответот ответ ответответ ответ ответ ответ",
    },
    {
      headText: "вопрос",
      bodyText:
        "Ответ ответ ответответответ ответответот ответ ответответ ответ ответ ответ ответответот ответ ответответ ответ ответ  ответответ ответ ответ ответ ответответот ответ ответответ ответ ответ ответ",
    },
    {
      headText: "вопрос",
      bodyText:
        "Ответ ответ ответответответ ответответот ответ ответответ ответ ответ ответ ответответот ответ ответответ ответ ответ  ответответ ответ ответ ответ ответответот ответ ответответ ответ ответ ответ",
    },
    {
      headText: "вопрос",
      bodyText:
        "Ответ ответ ответответответ ответответот ответ ответответ ответ ответ ответ ответответот ответ ответответ ответ ответ  ответответ ответ ответ ответ ответответот ответ ответответ ответ ответ ответ",
    },
  ];

  return (
    <>
      <div className={module["question-answer"]}>
        <div className={module["question-answer__column"]}>
          <Button
            className={module["question-answer-button"]}
            onClick={(e) => {
              e.preventDefault();
              setActiveStateAsk(!activeStateAsk);
            }}
          >
            задать свой вопрос
          </Button>
          <a
            className={module["question-answer-more"]}
            onClick={(e) => {
              e.preventDefault();
              setActiveStateQuestion(!activeStateQuestion);
            }}
          >
            Остальные ответы
            <img src={arrowDown} alt="" />
          </a>
        </div>
        <div className={module["question-answer__column"]}>
          <p className={module["question-answer-columns-title"]}>
            Тут мы собрали ответы на самые популярные вопросы о бренде, сервисе,
            покупке, доставке и самих ювелирных изделиях.
          </p>

          <AccordionComponent {...{ items }} />
        </div>
      </div>

      <Popup
        activeState={activeStateAsk}
        setActiveState={setActiveStateAsk}
        headText="задать вопрос"
        className={module.popup}
      >
        <p>
          Спросите нас или поделитесь мнением, мы свяжемся
          <br />с вами и ответим в течении дня. Спасибо!
        </p>

        <div className={module["popup-fields"]}>
          {popupFields.map((i) => (
            <InputField
              inputHeadText={i.headText}
              inputBoolean={i?.inputBoolean}
            />
          ))}
        </div>

        <div className={module["popup-button-container"]}>
          <Button className={module["popup-button"]}>отправить</Button>
          <p onClick={() => setActiveStateAsk(!activeStateAsk)}>
            ВЕРНУТЬСЯ НА СТРАНИЦУ
          </p>
        </div>
      </Popup>

      <Popup
        activeState={activeStateQuestion}
        setActiveState={setActiveStateQuestion}
        headText="вопрос-ответ"
        className={module.popup}
      >
        <div className={module["popup-fields"]}>
          <AccordionComponent
            items={questions}
            itemClassName={module.popup__accordion}
          />
        </div>

        <div className={module["popup-button-container"]}>
          <Button className={module["popup-button"]}>отправить</Button>
          <p onClick={() => setActiveStateQuestion(!activeStateQuestion)}>
            ВЕРНУТЬСЯ НА СТРАНИЦУ
          </p>
        </div>
      </Popup>
    </>
  );
}

export default QuestionAnswer;
