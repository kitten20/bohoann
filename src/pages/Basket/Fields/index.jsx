import InputField from "../../../components/InputField";

import module from "./style.module.scss";

function Fields() {
  const fields = [
    {
      inputHeadText: "ФИО",
    },
    {
      inputHeadText: "адрес доставки",
    },
    {
      inputHeadText: "телефон",
    },
    {
      inputHeadText: "e-mail",
      type: "email",
    },
  ];

  return (
    <div>
      <p className={module["field-title"]}>детали оплаты</p>
      {fields.map((i, index) => (
        <InputField inputHeadText={i.inputHeadText} type={i?.type} fieldBigger />
      ))}
    </div>
  );
}

export default Fields;
