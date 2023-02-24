import module from "./style.module.scss";

function RingType({ type = "", img = "" }) {
  return (
    <div className={module.ring}>
      <p>{type}</p>
      <img src={img} alt="" />
    </div>
  );
}

export default RingType;
