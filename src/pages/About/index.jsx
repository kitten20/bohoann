import { useServerStore } from "../../store";

import MainCard from "../../components/MainCard";
import AboutHeader from "./AboutHeader";
import HeaderSlider from "./HeaderSlider";
import SliderComments from "./SliderComments";
import TryAll from "./TryAll";

import module from "./style.module.scss";

function About() {
  const { serverData } = useServerStore();
  const aboutPageData = serverData[0]?.aboutPage[0];

  return (
    <>
      <MainCard
        headText="ювелирный эксперимент
для свободных духом"
        onlyHeadPaddingBoolean
        className={module.about__block}
      >
        <AboutHeader serverData={aboutPageData} />
      </MainCard>

      <MainCard
        headText="о бренде"
        onlyHeadPaddingBoolean
        className={module.about__block}
      >
        <HeaderSlider serverData={aboutPageData} />
      </MainCard>

      <MainCard
        headBoolean={false}
        onlyHeadPaddingBoolean
        className={module.about__block}
      >
        <SliderComments serverData={aboutPageData} />
      </MainCard>

      <MainCard
        headText="в каждом изделии - 
*ослепительное*
количество эмоций!"
        className={module.about__block}
      >
        <TryAll serverData={aboutPageData} />
      </MainCard>

      <MainCard headText="создавать вместе" className={module.tablet}>
        <TryAll row={2} serverData={aboutPageData} />
      </MainCard>
    </>
  );
}

export default About;
