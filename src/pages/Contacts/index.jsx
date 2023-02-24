import { useRef } from "react";

import MainCard from "../../components/MainCard";
import ContactsHeader from "./ContactsHeader";
import OfflineStore from "../../components/OfflineStore";
import Online from "./Online";
import Textus from "./Textus";

import module from './style.module.scss'

function Contacts() {
  const mapRef = useRef(null);

  return (
    <>
      <MainCard headText="контакты">
        <ContactsHeader />
      </MainCard>

      <MainCard
        headText="Bohoann offline store"
        swiperBoolean
        headSwiperPagination
        sliderUserRef={mapRef}
      >
        <OfflineStore {...{ mapRef }} className={module.store}/>
      </MainCard>

      <MainCard headText="bohoann online" onlyHeadPaddingBoolean>
        <Online />
      </MainCard>

      <MainCard headText="напишите нам!">
        <Textus />
      </MainCard>
    </>
  );
}

export default Contacts;
