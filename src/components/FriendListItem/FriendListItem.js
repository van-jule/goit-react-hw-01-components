import PropTypes from "prop-types";
import styles from "../FriendListItem/FriendListItem.module.css";

export function FriendListItem({ avatar, name, isOnline }) {
  const statusClass = isOnline ? styles.green : styles.red;
  console.log(statusClass);

  return (
    <div className={styles.wrap}>
      <span className={statusClass}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </div>
  );
}

FriendListItem.defaultProps = {
  avatar: "./",
  name: "Name of Friend",
  isOnline: false,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
