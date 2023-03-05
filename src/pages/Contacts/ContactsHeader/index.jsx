import Button from "../../../components/Button";

import module from "./style.module.scss";

import telephone from "./assets/telephone.svg";

function ContactsHeader({serverData = []}) {
  return (
    <div className={module.header}>
      <div className={module.header__column}>
        <p>
          Будем рады видеть вас в наших магазинах в Москве и Санкт-Петербурге и
          на всех площадках онлайн!
        </p>
        <p>
          Любую информацию можно уточнить по бесплатному номеру, в мессенджере и
          в почте {serverData?.email}
        </p>
      </div>
      <div className={module.header__column}>
        <h3>
          <img src={telephone} alt="" /> {serverData?.telephoneMessage?.telephone}
        </h3>
        <Button linkBoolean route={serverData?.telephoneMessage?.link}>перейти в мессенджер</Button>
      </div>
    </div>
  );
}

export default ContactsHeader;
