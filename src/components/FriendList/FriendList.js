import { FriendListItem } from "../FriendListItem/FriendListItem";

export function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <li className="item" key={friend.id}>
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
