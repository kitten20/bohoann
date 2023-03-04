import { Link } from "react-router-dom";

import module from "./style.module.scss";

function BlackBox({ title = "", route = "" }) {
  return (
    <Link to={route} className={module.box_black} href="">
      <h3>{title}</h3>
    </Link>
  );
}

export default BlackBox;
