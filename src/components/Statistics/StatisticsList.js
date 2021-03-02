import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import StatisticsItem from './StatisticsItem';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title.toUpperCase()}</h2>}

    <ul className={styles.statList}>
      {stats.map(({ id, label, percentage }) => (
        <StatisticsItem key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      // label: PropTypes.string.isRequired, //don't use it(if you want), cause we wrote this propType in StatisticItems
      // percentage: PropTypes.number.isRequired, //don't use it(if you want), cause we wrote this propType in StatisticItems
    }),
  ).isRequired,
};

// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.array.isRequired,
// };

export default Statistics;
