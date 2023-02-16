import module from './style.module.scss'

import background from './assets/background.png'

function AboutHeader() {
  return (
    <div className={module.header}>
      <p>
        В украшении Bohoann вас заметят хоть из космоса! Мы отказались от
        минимализма ради всех свободных духом, чтобы сделать весомое ювелирное
        заявление, созданное вручную.
      </p>

      <img src={background} alt="" />
    </div>
  );
}

export default AboutHeader;
