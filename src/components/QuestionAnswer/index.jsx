import { useState } from "react";
import { useServerStore } from "../../store";

import Button from "../Button";
import AccordionComponent from "../AccordionComponent";
import Popup from "../Popup";
import InputField from "../InputField";

import module from "./style.module.scss";

import arrowDown from "./assets/arrow.svg";

function QuestionAnswer() {
  const {serverData} = useServerStore()
  const [activeStateAsk, setActiveStateAsk] = useState(false);
  const [activeStateQuestion, setActiveStateQuestion] = useState(false);

  const items = serverData[0]?.questionAnswerDataPage;

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

  const questions = serverData[0]?.popupQuestionAnswerDataPage;

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
          {popupFields.map((i, index) => (
            <InputField
              inputHeadText={i.headText}
              inputBoolean={i?.inputBoolean}
              key={index}
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
