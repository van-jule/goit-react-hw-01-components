import PropTypes from "prop-types";
import styles from "../Statistics/Statistics.module.css";
export function Statistics({ title, stats }) {
  const randomColor = () => {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    let opacity = 0.5;
    let randomColor = `rgb(${red}, ${green}, ${blue}, ${opacity})`;
    return randomColor;
  };

  return (
    <section className={styles.section}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map((stat) => (
          <li
            className={styles.item}
            key={stat.id}
            style={{ background: randomColor() }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
