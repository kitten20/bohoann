import { useServerStore } from "../../store";
import { useRef } from "react";

import MainCard from "../../components/MainCard";
import ContactsHeader from "./ContactsHeader";
import OfflineStore from "../../components/OfflineStore";
import Online from "./Online";
import Textus from "./Textus";

import module from "./style.module.scss";

function Contacts() {
  const { serverData } = useServerStore();
  const contacts = serverData[0]?.contacts[0];
  const mainLinks = serverData[0]?.mainLinks[0];

  const mapRef = useRef(null);

  return (
    <>
      <MainCard headText="контакты">
        <ContactsHeader serverData={mainLinks} />
      </MainCard>

      <MainCard
        headText="Bohoann offline store"
        swiperBoolean
        headSwiperPagination
        sliderUserRef={mapRef}
      >
        <OfflineStore {...{ mapRef }} className={module.store} />
      </MainCard>

      <MainCard headText="bohoann online" onlyHeadPaddingBoolean>
        <Online {...{ serverData }} />
      </MainCard>

      <MainCard headText="напишите нам!">
        <Textus serverData={mainLinks} />
      </MainCard>
    </>
  );
}

export default Contacts;
