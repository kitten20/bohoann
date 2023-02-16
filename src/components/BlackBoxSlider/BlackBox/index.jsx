import module from "./style.module.scss";

function BlackBox({ title = "" }) {
  return (
      <a className={module.box_black} href="">
        <h3>{title}</h3>
      </a>
  );
}

export default BlackBox;
