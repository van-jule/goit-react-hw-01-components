import { FriendListItem } from "../FriendListItem/FriendListItem";
import styles from "../FriendList/FriendList.module.css";

export function FriendList({ friends }) {
  return (
    <ul className={styles.list}>
      {friends.map((friend) => (
        <li className={styles.item} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
