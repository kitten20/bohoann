import MainCard from "../../components/MainCard";
import VideoComponent from "./VideoComponent";
import HowDoesItWork from "./HowDoesItWork";
import Rings from "./Rings";

import module from "./style.module.scss";

function RingBar() {
  return (
    <>
      <MainCard onlyHeadPaddingBoolean headText="ring-бар">
        <VideoComponent />
      </MainCard>
      <MainCard headText="как это работает">
        <HowDoesItWork />
      </MainCard>
      <MainCard headText="выберите кольца">
        <Rings />
      </MainCard>
    </>
  );
}

export default RingBar;
