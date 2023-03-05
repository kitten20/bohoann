import module from "./style.module.scss";

import ozon from "./assets/ozon.svg";
import wildberries from "./assets/wildberries.svg";
import vk from "./assets/vk.svg";
import telegram from "./assets/telegram.svg";
import pinterest from "./assets/pinterest.svg";

function Online({serverData = []}) {
  const contacts = serverData[0]?.contacts[0]
  const mainLinks = serverData[0]?.mainLinks[0]

  const alphabet = ["a", "b", "c", "d", "e"];
  const links = [
    {
      img: contacts?.ozon,
      link: mainLinks?.ozon,
    },
    {
      img: contacts?.wildberries,
      link: mainLinks?.wildberries,
    },
    {
      img: contacts?.vk,
      link: mainLinks?.vk,
    },
    {
      img: contacts?.telegram,
      link: mainLinks?.vk,
    },
    {
      img: contacts?.pinterest,
      link: mainLinks?.pinterest,
    },
  ];

  return (
    <div className={module.block}>
      <div className={module["block-container"]}>
        {links.map((i, index) => (
          <a href={i.link} style={{ gridArea: alphabet[index] }}>
            <img src={i.img} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Online;
