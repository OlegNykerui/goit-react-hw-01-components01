import PropTypes from 'prop-types';

import { Card, Title, List, Item, Label } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Card>
      <Title>{title}</Title>

      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <Label>{label}</Label>
              <span>{percentage}</span>
            </Item>
          );
        })}
      </List>
    </Card>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
