import module from "./style.module.scss";

function InputField({
  inputBoolean = true,
  inputHeadText = "",
  type = "text",
  fieldBigger = false,
}) {
  const checkFieldBigger = () => fieldBigger && " " + module.field_bigger

  return inputBoolean ? (
    <form className={module.field + checkFieldBigger()}>
      <p>{inputHeadText}</p>

      <input {...{ type }} />
    </form>
  ) : (
    <form className={module.field}>
      <p>{inputHeadText}</p>

      <textarea name="" id="" cols="30" rows="10"></textarea>
    </form>
  );
}

export default InputField;
