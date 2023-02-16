import MainCard from "../../components/MainCard";
import AboutHeader from "./AboutHeader";
import HeaderSlider from "./HeaderSlider";
import SliderComments from "./SliderComments";
import TryAll from "./TryAll";

import module from "./style.module.scss";

function About() {
  return (
    <>
      <MainCard
        headText="ювелирный эксперимент
для свободных духом"
        onlyHeadPaddingBoolean
        className={module.about__block}
      >
        <AboutHeader />
      </MainCard>

      <MainCard
        headText="о бренде"
        onlyHeadPaddingBoolean
        className={module.about__block}
      >
        <HeaderSlider />
      </MainCard>

      <MainCard
        headBoolean={false}
        onlyHeadPaddingBoolean
        className={module.about__block}
      >
        <SliderComments />
      </MainCard>

      <MainCard
        headText="в каждом изделии - 
*ослепительное*
количество эмоций!"
        className={module.about__block}
      >
        <TryAll />
      </MainCard>
    </>
  );
}

export default About;
