import AboutSlider from "../../../components/AboutSlider";

import module from "./style.module.scss";

import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";
import img6 from "./assets/6.png";

function HeaderSlider() {
  const userSlides = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
    {
      img: img6,
    },
  ];

  return (
    <div>
      <p className={module.desc}>
        Bohoann — это нескончаемый ювелирный эксперимент, в котором мы исследуем
        яркий жизненный опыт и фиксируем его в драгоценных материалах.
      </p>
      <AboutSlider className={module.desktop} />
      <AboutSlider
        className={module.mobile}
        {...{ userSlides }}
        userSlideClassName={module.slide}
      />
    </div>
  );
}

export default HeaderSlider;
