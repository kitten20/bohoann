import module from "./style.module.scss";

import ozon from "./assets/ozon.svg";
import wildberries from "./assets/wildberries.svg";
import vk from "./assets/vk.svg";
import telegram from "./assets/telegram.svg";
import pinterest from "./assets/pinterest.svg";

function Online() {
  const alphabet = ["a", "b", "c", "d", "e"];
  const links = [
    {
      img: ozon,
      link: "",
    },
    {
      img: wildberries,
      link: "",
    },
    {
      img: vk,
      link: "",
    },
    {
      img: telegram,
      link: "",
    },
    {
      img: pinterest,
      link: "",
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
