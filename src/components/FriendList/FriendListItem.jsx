import PropTypes from 'prop-types';
import { Item, Offline, Online } from './FriendList.styled';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <Item key={id}>
      {isOnline ? <Online>{isOnline}</Online> : <Offline>{isOnline}</Offline>}
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
