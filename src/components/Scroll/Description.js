import styles from "./style.module.scss";

export default function Description({ title, subtitle }) {
  const items = [
    {
      image: "/images/cultura/01.png",
      title: "Tradición viva",
      text: "Una experiencia profunda de conexión cultural.",
      button: "Ver más",
      bullets: [
        "Encuentros con comunidades locales",
        "Prácticas culturales vivas",
        "Relación directa con el territorio",
      ],
    },
    {
      image: "/images/cultura/02.png",
      title: "Comunidad",
      text: "Vínculos reales con el territorio y su gente.",
      button: "Ver más",
      bullets: [
        "Intercambio cotidiano",
        "Procesos colaborativos",
        "Participación activa",
      ],
    },
    {
      image: "/images/cultura/03.png",
      title: "Territorio",
      text: "Naturaleza y cultura como un mismo proceso.",
      button: "Ver más",
      bullets: [
        "Ecosistemas protegidos",
        "Conservación y regeneración",
        "Experiencias inmersivas",
      ],
    },
  ];

  return (
    <div className={styles.description}>
      <h1 className={styles.traveldescriptiontitle}>{title}</h1>
      <p className={styles.traveldescriptionsubtitle}>{subtitle}</p>

      <div className={styles.itemscontainer}>
  {items.map((item, index) => (
    <div
      key={index}
      className={styles.item}
      style={{ backgroundImage: `url(${item.image})` }}
    >
      {/* Contenido base */}
      <div className={styles.overlayBase}>
        <h3 className={styles.traveldescriptiontitle}>{item.title}</h3>
        <p className={styles.traveldescriptionsubtitle}>{item.text}</p>
      </div>

      {/* Overlay hover */}
      <div className={styles.overlayHover}>
        <h3 className={styles.traveldescriptiontitle}>{item.title}</h3>
        <ul>
          {item.bullets.map((bullet, i) => (
            <li className={styles.traveldescriptionsubtitle} key={i}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}
