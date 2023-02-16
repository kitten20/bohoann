import { Link } from "react-router-dom";

import module from "./style.module.scss";

function Button({
  type = "white",
  linkBoolean = false,
  route = "",
  className = "",
  onClick = () => {},
  children,
}) {
  return linkBoolean ? (
    <Link
      to={route}
      className={
        className +
        " " +
        module.button +
        " " +
        (type === "black" ? module.black : module.white)
      }
    >
      {children}
    </Link>
  ) : (
    <button
      {...{ onClick }}
      className={
        className +
        " " +
        module.button +
        " " +
        (type === "black" ? module.black : module.white)
      }
    >
      {children}
    </button>
  );
}

export default Button;
