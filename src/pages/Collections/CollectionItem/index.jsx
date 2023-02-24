import Button from "../../../components/Button";

import module from "./style.module.scss";

function CollectionItem({
  img = "",
  title = "",
  blackTitleBoolean = false,
  cardText = "",
  route = "",
}) {
  const blackTitleCheck = () =>
    blackTitleBoolean ? " " + module.title_black : "";

  return (
    <div className={module.item}>
        <div className={module.background} style={{backgroundImage: `url(${img})`}}></div>
      <h4 className={module.title + blackTitleCheck()}>{title}</h4>
      <p className={module.description}>{cardText}</p>
      <Button
        type="black"
        {...{ route }}
        linkBoolean
        className={module.button}
      >
        перейти в коллекцию
      </Button>
    </div>
  );
}

export default CollectionItem;
