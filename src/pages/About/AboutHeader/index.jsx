import module from "./style.module.scss";

function AboutHeader({ serverData = []}) {
  const background = serverData?.headerBackground

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
