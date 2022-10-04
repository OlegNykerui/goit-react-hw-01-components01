import PropTypes from 'prop-types';

import {
  Card,
  Description,
  Avatar,
  Username,
  Tag,
  Location,
  Stats,
  List,
} from './Profile.styled';

export function Profile({ username, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;

  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Username>{username}</Username>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <List>
          <span>Followers</span>
          <span>{followers}</span>
        </List>
        <List>
          <span>Views</span>
          <span>{views}</span>
        </List>
        <List>
          <span>Likes</span>
          <span>{likes}</span>
        </List>
      </Stats>
    </Card>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
