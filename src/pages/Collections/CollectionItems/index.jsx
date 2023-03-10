import { useServerStore } from "../../../store";

import CollectionItem from "../CollectionItem";

import module from "./style.module.scss";

import svg1 from "./assets/1.svg";
import svg2 from "./assets/2.svg";
import svg3 from "./assets/3.svg";
import svg4 from "./assets/4.svg";
import svg5 from "./assets/5.svg";
import svg6 from "./assets/6.svg";
import svg7 from "./assets/7.svg";
import svg8 from "./assets/8.svg";
import svg9 from "./assets/9.svg";
import svg10 from "./assets/10.svg";
import svg11 from "./assets/rings.svg";
import svg12 from "./assets/12.svg";
import svg13 from "./assets/13.svg";

function CollectionItems() {
  const { serverData } = useServerStore();
  const collections = serverData[0]?.collections;

  const collectionsMock = [
    {
      title: "enigma",
      img: svg13,
      cardText:
        "Коллекция украшений с неровным краем и вставками из ограненных камней. Чтобы усилить мерцание изделий на коже мы использовали античную рельефную фактуру в сочетании с чёткими гранями, которые ловят и преломляют любой свет. В итоге получилась женственная, сияющая, таинственная коллекция.",
      route: "/",
      blackTitleBoolean: false,
    },
    {
      title: "woman",
      img: svg3,
      cardText:
        "Всегда считали, что драгоценные и натуральные камни имеют схожую энергию с женской — грани и изгибы, природное сияние, таинство, игра светотени. Так родилась коллекция нежных мерцающих украшений.",
      route: "/",
      blackTitleBoolean: false,
    },
    {
      title: "brilliance",
      img: svg1,
      cardText:
        "В 2012 году мы вывели авторскую текстуру, которая имитирует мелкую россыпь бриллиантов. Текстура стала визитной карточкой бренда, и на её основе мы создали коллекцию Brilliance. Внутри серьги, подвески и кольца, в том числе обручальные кольца в серебре и золоте.",
      route: "/",
      blackTitleBoolean: false,
    },
    {
      title: "nimbus",
      img: svg5,
      cardText:
        "В 2012 году мы вывели авторскую текстуру, которая имитирует мелкую россыпь бриллиантов. Текстура стала визитной карточкой бренда, и на её основе мы создали коллекцию Brilliance. Внутри серьги, подвески и кольца, в том числе обручальные кольца в серебре и золоте.",
      route: "/",
      blackTitleBoolean: false,
    },
    {
      title: "balance",
      img: svg4,
      cardText:
        "В 2012 году мы вывели авторскую текстуру, которая имитирует мелкую россыпь бриллиантов. Текстура стала визитной карточкой бренда, и на её основе мы создали коллекцию Brilliance. Внутри серьги, подвески и кольца, в том числе обручальные кольца в серебре и золоте.",
      route: "/",
      blackTitleBoolean: true,
    },
    {
      title: "museum",
      img: svg6,
      cardText:
        "В 2012 году мы вывели авторскую текстуру, которая имитирует мелкую россыпь бриллиантов. Текстура стала визитной карточкой бренда, и на её основе мы создали коллекцию Brilliance. Внутри серьги, подвески и кольца, в том числе обручальные кольца в серебре и золоте.",
      route: "/",
      blackTitleBoolean: true,
    },
    {
      title: "base",
      img: svg7,
      cardText:
        "Ювелирная база в духе Bohoann — украшения, которые подойдут к любому образу и моменту времени, но при этом останутся массивными, фактурными и заметными. Мастхэв на каждый день для всех свободных духом.",
      route: "/",
      blackTitleBoolean: false,
    },
    {
      title: "zodiak",
      img: svg9,
      cardText:
        "Коллекция зодиакальных колье, созданных совместно с астрологом. В каждом изделии сочетается энергия трёх: планеты, знака зодиака и натурального камня. В дополнение к колье вы получаете подробное описание его энергетики.",
      route: "/",
      blackTitleBoolean: true,
    },
    {
      title: "chains",
      img: svg10,
      cardText:
        "Тотальный эксперимент на тему цепных связей. В изделиях комбинируем размер, форму звеньев и сочетания цепей разной ширины. Кроме привычных браслетов и цепочек на шею в коллекцию включены экстравагантные нательные украшения, кольца и цепная перчатка из серебра.",
      route: "/",
      blackTitleBoolean: false,
    },
    {
      title: "petra",
      img: svg8,
      cardText:
        "Чувственные украшения с отпечатками настоящего кружева. Кружевную ткань прокатывают вместе с металлом, в итоге получается уникальный оттиск мелкого или более крупного узора. <br/>Нежная и женственная, хрупкая, но смелая, наивная, настоящая — её звали Петра.",
      route: "/",
      blackTitleBoolean: false,
    },
    {
      title: "tropics",
      img: svg2,
      cardText:
        "Дикая, неукротимая коллекция, вдохновлённая могущественной флорой и фауной тропиков. На каждом изделии уникальный принт экзотических растений: эхеверии, агавы, сочных зелёных листьев, а среди драгоценных зарослей царствует величественная пантера.        ",
      route: "/",
      blackTitleBoolean: false,
    },
    {
      title: "hypnosis",
      img: svg12,
      cardText:
        "Гипнотическая коллекция подвижных украшений. В каждом изделии сплетены окружности разной толщины и текстур. Преумножение линий захватывает внимание и уже не отпускает.",
      route: "/",
      blackTitleBoolean: false,
    },
    {
      title: "new",
      img: svg13,
      cardText:
        "Коллекция украшений с неровным краем и вставками из ограненных камней. Чтобы усилить мерцание изделий на коже мы использовали античную рельефную фактуру в сочетании с чёткими гранями, которые ловят и преломляют любой свет. В итоге получилась женственная, сияющая, таинственная коллекция.",
      route: "/",
      blackTitleBoolean: false,
    },
    {
      title: "кольца-столбы",
      img: svg11,
      cardText:
        "Мы называем их кольца-аксессуары, потому что веса в них скорее как в сумке. Если на вас кольцо-столб Bohoann, то другие украшение вам больше не нужны — это понятное, прямое ювелирное заявление..",
      route: "/",
      blackTitleBoolean: true,
    },
  ];

  return (
    <div className={module.items}>
      {collections?.map((i, index) => (
        <CollectionItem
          key={index}
          img={i.img}
          title={i.title}
          blackTitleBoolean={i?.blackTitleBoolean}
          cardText={i.cardText}
          route={i.route}
        />
      ))}
    </div>
  );
}

export default CollectionItems;
