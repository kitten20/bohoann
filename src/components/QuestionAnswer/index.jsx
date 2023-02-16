import Button from "../Button";
import AccordionComponent from "../AccordionComponent";

import module from "./style.module.scss";

import arrowDown from "./assets/arrow.svg";

function QuestionAnswer() {
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

  return (
    <div className={module["question-answer"]}>
      <div className={module["question-answer__column"]}>
        <Button className={module["question-answer-button"]}>
          задать свой вопрос
        </Button>
        <a
          href="https://youtube.com"
          className={module["question-answer-more"]}
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
  );
}

export default QuestionAnswer;
