import PropTypes from 'prop-types';

const circleStyle = {
  display: 'inline-block',
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  marginRight: '5px',
};

const onlineStyle = {
  backgroundColor: 'green',
};

const offlineStyle = {
  backgroundColor: 'red',
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li key={name} className="item">
      <span
        className="status"
        style={{
          ...circleStyle,
          ...(isOnline ? onlineStyle : offlineStyle),
        }}
      >
        {isOnline}
      </span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          key={friend.name}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ).isRequired,
};

export default FriendList;
