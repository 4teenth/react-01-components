import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const randomColor = () => {
  // Math.pow is slow, use constant instead.
  let color = Math.floor(Math.random() * 16777216).toString(16);
  // Avoid loops.
  return '#000000'.slice(0, -color.length) + color;
};

const StatisticsItem = ({ label, percentage }) => (
  <li style={{ backgroundColor: randomColor() }}>
    {/* OR move <li> to StatisticsList and use here <></>(Fragment) */}
    <span style={{ background: randomColor() }} className={styles.label}>
      {label}
    </span>
    <span className={styles.percentage}>{percentage}%</span>
  </li>
);

StatisticsItem.propTypes = {
  // id: PropTypes.string.isRequired, //* if use|add "id-key" for "li" this propType doesn't work, get a mistake in a console(add "id-key" when we write array, or use array methods, e.g..map)
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
