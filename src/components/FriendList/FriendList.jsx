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

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.name} className="item">
          <span
            className="status"
            style={{
              ...circleStyle,
              ...(friend.isOnline ? onlineStyle : offlineStyle),
            }}
          >
            {friend.isOnline}
          </span>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
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
