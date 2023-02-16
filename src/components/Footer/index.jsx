import Button from "../Button";

import module from "./style.module.scss";

import logo from "./assets/logo.svg";
import logoShort from "./assets/logo-short.svg";
import gift from "./assets/gift.svg";
import vk from "./assets/vk.svg";
import telegram from "./assets/telegram.svg";
import pinterest from "./assets/pinterest.svg";
import telephone from "./assets/telephone.svg";
import message from "./assets/message.svg";

function Footer() {
  const linkThreeRows = (title = "", street = "", telephone = "") => (
    <>
      <span>{title}</span>
      <br />
      {street}
      <br />
      {telephone}
    </>
  );
  const FooterIcons = () => (
    <div className={module["footer-icons"]}>
      <a href="">
        <img src={vk} alt="" />
      </a>
      <a href="">
        <img src={telegram} alt="" />
      </a>
      <a href="">
        <img src={pinterest} alt="" />
      </a>
    </div>
  );
  const FooterIconsBottom = () => (
    <div className={module["footer-icons_bottom"]}>
      <a href="">
        <img src={telephone} alt="" />
      </a>
      <a href="">
        <img src={message} alt="" />
      </a>
    </div>
  );
  const FooterMessageRow = () => (
    <>
      <div className={module["footer-message-row"]}>
        <Button type="black" linkBoolean className={module["footer-button"]}>
          в мессенджер
        </Button>
        <a href="tel:8 800 300 8 777">8 800 300 8 777</a>
      </div>
    </>
  );

  const footerLinks = [
    {
      title: "каталог",

      links: [
        {
          text: "SALE",
          link: "https://www.google.com",
        },
        {
          text: "Кольца",
          link: "https://www.google.com",
        },
        {
          text: "Серьги",
          link: "https://www.google.com",
        },
        {
          text: "Колье",
          link: "https://www.google.com",
        },
        {
          text: "Браслеты",
          link: "https://www.google.com",
        },
        {
          text: "Каффы",
          link: "https://www.google.com",
        },
        {
          text: "Комплекты",
          link: "https://www.google.com",
        },
        {
          text: "Золото",
          link: "https://www.google.com",
        },
      ],
    },
    {
      title: "коллекции",

      links: [
        {
          text: "Новинки",
          link: "https://www.google.com",
        },
        {
          text: "Базовые украшения",
          link: "https://www.google.com",
        },
        {
          text: "Enigma",
          link: "https://www.google.com",
        },
        {
          text: "Hypnosis",
          link: "https://www.google.com",
        },
        {
          text: "Chains",
          link: "https://www.google.com",
        },
        {
          text: "Petra",
          link: "https://www.google.com",
        },
        {
          text: "Brilliance",
          link: "https://www.google.com",
        },
        {
          text: "Остальные коллекции",
          link: "https://www.google.com",
        },
      ],
    },
    {
      title: "СЕРВИС",

      links: [
        {
          text: "Кастомизация и индивидуальное изготовление",
          link: "https://www.google.com",
        },
        {
          text: "Ring-bar",
          link: "https://www.google.com",
        },
        {
          text: "Другое",
          link: "https://www.google.com",
        },
      ],
    },
    {
      links: [
        {
          text: linkThreeRows(
            "Москва",
            "Садово-Черногрязская 3Бс1",
            "+7 900 620 88 77"
          ),
          link: "tel:+7 900 620 88 77",
        },
        {
          text: linkThreeRows(
            "Санкт-Петербург",
            "Рылеева 33",
            "+7 812 250 8 777"
          ),
          link: "tel:+7 812 250 8 777",
        },
        {
          text: "bohoann@yandex.ru",
          link: "https://www.google.com",
        },
      ],
    },
  ];

  return (
    <footer>
      <div className={module["footer-content"] + " " + module.desktop}>
        <div className={module.footer__column}>
          <div className={module.footer__row}>
            <img src={logo} alt="" />
            <div>
              <h3>BOHOANN.RU</h3>
              <p>Ювелирные украшения для свободных духом</p>
            </div>
          </div>
          <div className={module.footer__row}>
            {footerLinks.map((i, index) => (
              <div className={module.footer__links} key={index}>
                {i?.title && <h4>{i?.title}</h4>}
                <div>
                  {i.links?.map((link, index) => (
                    <a href={link?.link} key={index}>
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={module.footer__row}>
            <img src={gift} alt="" />
            <p>
              Получи уникальное кольцо-подарок <br />
              при заказе от 15 000 рублей!
            </p>
          </div>
        </div>

        <div className={module.footer__column}>
          <FooterMessageRow />

          <FooterIcons />

          <a>
            <span>ИП Коваленко Д.А. ОРГНИП 316784700073997</span>
          </a>

          <p>дизайн от chsv.agency</p>

          <FooterIconsBottom />
        </div>
      </div>

      <div className={module["footer-content"] + " " + module.tablet}>
        <div className={module.footer__row}>
          <div>
            <img src={logo} alt="" />
            <div>
              <h3>BOHOANN.RU</h3>
              <p>Ювелирные украшения для свободных духом</p>
            </div>
          </div>

          <FooterIcons />
        </div>
        <div className={module.footer__row}>
          {footerLinks.map((i, index) => (
            <div className={module.footer__links} key={index}>
              {i?.title && <h4>{i?.title}</h4>}
              <div>
                {i.links?.map((link, index) => (
                  <a href={link?.link} key={index}>
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={module.footer__row}>
          <div>
            <a>
              <span>ИП Коваленко Д.А. ОРГНИП 316784700073997</span>
            </a>

            <p>дизайн от chsv.agency</p>
          </div>

          <FooterMessageRow />
        </div>

        <div className={module.footer__row}>
          <div>
            <img src={gift} alt="" />
            <p>
              Получи уникальное кольцо-подарок <br />
              при заказе от 15 000 рублей!
            </p>
          </div>
          <FooterIconsBottom />
        </div>
      </div>

      <div className={module["footer-content"] + " " + module.mobile}>
        <div className={module.footer__row}>
          <div>
            <h3>BOHOANN.RU</h3>
            <p>Ювелирные украшения для свободных духом</p>
          </div>

          <img src={logoShort} alt="" />
        </div>
        <div className={module.footer__row}>
          {footerLinks.map(
            (i, index) =>
              i?.title && (
                <div className={module.footer__links} key={index}>
                  <h4>{i?.title}</h4>
                  <div>
                    {i.links?.map((link, index) => (
                      <a href={link?.link} key={index}>
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>

        <div className={module.footer__row}>
          {footerLinks.map(
            (i, index) =>
              !i?.title &&
              i?.links.map((link) => link.text !== "bohoann@yandex.ru" && (
                <a href={link?.link} key={index}>
                  {link.text} 
                </a>
              ))
          )}
          <FooterMessageRow />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
