import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const randomColor = () => {
  // Math.pow is slow, use constant instead.
  let color = Math.floor(Math.random() * 16777216).toString(16);
  // Avoid loops.
  return '#000000'.slice(0, -color.length) + color;
};

const StatisticsItem = ({ id, label, percentage }) => (
  <li key={id} style={{ background: randomColor() }}>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}%</span>
  </li>
);

StatisticsItem.propTypes = {
  //   id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
