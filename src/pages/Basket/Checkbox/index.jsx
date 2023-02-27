import module from "./style.module.scss";

function Checkbox({ item = "", className = "",  }) {
  return (
    <div className={module.checkbox + " " + className}>
      <input type="checkbox" name="" id="" />
      <p>{item}</p>
    </div>
  );
}

export default Checkbox;
