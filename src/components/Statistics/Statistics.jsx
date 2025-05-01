import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        <li className="item">
          <span className="label">{stats.type}</span>
          <span className="percentage">{stats.percentage}</span>
        </li>
        <li className="item">
          <span className="label">{stats.type}</span>
          <span className="percentage">{stats.percentage}</span>
        </li>
        <li className="item">
          <span className="label">{stats.type}</span>
          <span className="percentage">{stats.percentage}</span>
        </li>
        <li className="item">
          <span className="label">{stats.type}</span>
          <span className="percentage">{stats.percentage}</span>
        </li>
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Statistics;
