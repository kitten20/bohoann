import MainCard from "../MainCard";

import module from "./style.module.scss";

import dolyamiImage from "./assets/cross-dolyami.svg";

function Popup({
  className = "",
  containerClassName = "",
  headText = "",
  beforeHeadTextBoolean = false,
  beforeHeadTextContent = () => {},
  crossBoolean = true,
  dolyamiBoolean = false,
  activeState = false,
  setActiveState = () => {},
  children,
}) {
  const PopupClose = () =>
    crossBoolean ? (
      <div
        onClick={() => setActiveState(!activeState)}
        className={module.popup__cross}
      >
        X
      </div>
    ) : !crossBoolean && dolyamiBoolean ? (
      <div
        onClick={() => setActiveState(!activeState)}
        className={module.popup__dolyami}
      >
        <img src={dolyamiImage} alt="" />
      </div>
    ) : (
      <span></span>
    );

  return (
    activeState && (
      <>
        <div
          className={module["popup-background"]}
          onClick={() => setActiveState(!activeState)}
        ></div>

        <div className={module.popup + " " + className}>
          <div className={module.popup__container + " " + containerClassName}>
            {beforeHeadTextBoolean && beforeHeadTextContent}

            <div className={module.popup__head}>
              <h2>{headText}</h2>

              <PopupClose />
            </div>

            {children}
          </div>
        </div>
      </>
    )
  );
}

export default Popup;
