import PropTypes from 'prop-types';
import { Table, Title, Info, String } from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Title>
        <String>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </String>
      </Title>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <String key={id}>
              <Info>{type}</Info>
              <Info>{amount}</Info>
              <Info>{currency}</Info>
            </String>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
