import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(stat => (
          <li
            key={stat.type}
            className="item"
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <span className="label">{stat.type}</span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

export default Statistics;
