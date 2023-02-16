import module from "./style.module.scss";

function Comment({ text = "" }) {
  return (
    <div className={module.comment}>
      <div className={module["comment-content"]}>{text}</div>
    </div>
  );
}

export default Comment;
