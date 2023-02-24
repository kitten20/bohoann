import MainCard from "../../components/MainCard";
import CollectionItems from "./CollectionItems";

import module from "./style.module.scss";

function Collections() {
  return (
    <>
      <MainCard
      className={module.collections} 
      onlyHeadPaddingBoolean 
      headText="коллекции">
        <CollectionItems />
      </MainCard>
    </>
  );
}

export default Collections;
