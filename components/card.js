import style from "../styles/card.module.css";

export default function Cards({ src, title, description, price }) {
  return (
    <div className={style.card}>
      <img src={src} alt="" />
      <div className={style.card__info}>
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}
