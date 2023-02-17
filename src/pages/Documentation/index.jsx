import MainCard from "../../components/MainCard";
import AccordionComponent from "../../components/AccordionComponent";

import module from './style.module.scss'

function Documentation() {
  const items = [
    {
      headText: "информаци для покупателей ювелирных изделий",
      bodyText:
        "Lorem ipsum dolor sit amet, consectet null a ante. Lorem ipsum dolor sit amet, consect",
    },
    {
      headText: "Эскизы пробирных клейм для серебряных изделий",
      bodyText:
        "Lorem ipsum dolor sit amet, consectet null a ante. Lorem ipsum dolor sit amet, consect",
    },
    {
      headText: "Информация на ярлыке изделия",
      bodyText:
        "Lorem ipsum dolor sit amet, consectet null a ante. Lorem ipsum dolor sit amet, consect",
    },
    {
      headText:
        "Особенности продажи изделий из драгоценных металлов и драгоценных камней",
      bodyText:
        "Lorem ipsum dolor sit amet, consectet null a ante. Lorem ipsum dolor sit amet, consect",
    },
    {
      headText:
        "Правила эксплуатации ювелирных изделий из драгоценных металлов и драгоценных камней",
      bodyText:
        "Lorem ipsum dolor sit amet, consectet null a ante. Lorem ipsum dolor sit amet, consect",
    },
    {
      headText:
        "Постановление Правительства РФ Об утверждении Правил продажи товаров ",
      bodyText:
        "Lorem ipsum dolor sit amet, consectet null a ante. Lorem ipsum dolor sit amet, consect",
    },
    {
      headText: "политика конфиденциальности",
      bodyText:
        "Lorem ipsum dolor sit amet, consectet null a ante. Lorem ipsum dolor sit amet, consect",
    },
  ];

  return (
    <>
      <MainCard headText="документация">
        <p className={module.para}>Тут собрана вся необходимая документация по разделам.</p>
        <AccordionComponent {...{ items }} />
      </MainCard>
    </>
  );
}

export default Documentation;
