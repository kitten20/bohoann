import { useServerStore } from "../../store";

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
  const { serverData } = useServerStore();
  const footerLinksServer = serverData[0]?.footerLinks[0];
  const mainLinks = serverData[0]?.mainLinks[0];

  // const LinkThreeRows = (title = "", street = "", telephone = "") => (
  //   <>

  //   </>
  // );
  const FooterIcons = () => (
    <div className={module["footer-icons"]}>
      <a href={mainLinks?.vk}>
        <img src={vk} alt="" />
      </a>
      <a href={mainLinks?.telegram}>
        <img src={telegram} alt="" />
      </a>
      <a href={mainLinks?.pinterest}>
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
        <Button
          type="black"
          route={mainLinks?.telephoneMessage?.link}
          linkBoolean
          className={module["footer-button"]}
        >
          в мессенджер
        </Button>
        <a href={`tel:${mainLinks?.telephoneMessage?.telephone}`}>
          {mainLinks?.telephoneMessage?.telephone}
        </a>
      </div>
    </>
  );

  const footerLinks = [
    {
      title: "каталог",

      links: footerLinksServer?.catalogue ?? [],
    },
    {
      title: "коллекции",

      links: footerLinksServer?.collections ?? [],
    },
    {
      title: "СЕРВИС",

      links: footerLinksServer?.service ?? [],
    },
    // links: [
    //   {
    //     text: linkThreeRows(
    //       "Москва",
    //       "Садово-Черногрязская 3Бс1",
    //       "+7 900 620 88 77"
    //     ),
    //     link: "tel:+7 900 620 88 77",
    //   },
    //   {
    //     text: linkThreeRows(
    //       "Санкт-Петербург",
    //       "Рылеева 33",
    //       "+7 812 250 8 777"
    //     ),
    //     link: "tel:+7 812 250 8 777",
    //   },
    //   {
    //     text: "bohoann@yandex.ru",
    //     link: "https://www.google.com",
    //   },
    // ]
  ];

  const footerAddress = footerLinksServer?.addresses ?? [];

  const FooterAddressContainer = () => (
    <div className={module.footer__links_address}>
      {footerAddress?.map((i, index) => (
        <div className={module.footer__links} key={index}>
          {i.city !== undefined ? (
            <div>
              <a href={i.link} key={index}>
                <span>{i.city}</span>
                <br />
                {i.street}
                <br />
                {i.telephone}
              </a>
            </div>
          ) : (
            <a href={i.link}>{i.text}</a>
          )}
        </div>
      ))}
    </div>
  );

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
            {footerLinks?.map((i, index) => (
              <div className={module.footer__links} key={index}>
                {i?.title && <h4>{i?.title}</h4>}
                <div>
                  {i?.links?.map((link, indexLink) => (
                    <a href={link?.link} key={indexLink}>
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <FooterAddressContainer />
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
            <span>{footerLinksServer?.human ?? ""}</span>
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
          {footerLinks?.map((i, index) => (
            <div className={module.footer__links} key={index}>
              {i?.title && <h4>{i?.title}</h4>}
              <div>
                {i?.links?.map((link, indexLink) => (
                  <a href={link?.link} key={indexLink}>
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <FooterAddressContainer />
        </div>
        <div className={module.footer__row}>
          <div>
            <a>
              <span>{footerLinksServer?.human ?? ""}</span>
            </a>

            <p>
              <a href="">дизайн от chsv.agency</a>
            </p>
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
          {footerLinks?.map(
            (i, index) =>
              i?.title && (
                <div className={module.footer__links} key={index}>
                  <h4>{i?.title}</h4>
                  <div>
                    {i?.links?.map((link, indexLink) => (
                      <a href={link?.link} key={indexLink}>
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>

        <div className={module.footer__row}>
          <FooterAddressContainer />
          <FooterMessageRow />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
