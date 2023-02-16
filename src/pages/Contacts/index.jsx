import MainCard from "../../components/MainCard";
import ContactsHeader from "./ContactsHeader";
import OfflineStore from "../../components/OfflineStore";

function Contacts() {
  return (
    <>
      <MainCard headText="контакты">
        <ContactsHeader />
      </MainCard>

      <MainCard headText="Bohoann offline store">
        <OfflineStore />
      </MainCard>
    </>
  );
}

export default Contacts;
