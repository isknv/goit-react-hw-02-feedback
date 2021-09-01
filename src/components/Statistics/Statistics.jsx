import PropTypes from "prop-types";

const Statistics = ({
  title,
  options,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <>
      <h2>{title}</h2>
      <ul style={{ listStyle: "none" }}>
        <li>Good: {options.good}</li>
        <li>Neutral: {options.neutral}</li>
        <li>Bad: {options.bad}</li>
        <li>Total: {countTotalFeedback()}</li>
        <li>Positive feedback: {countPositiveFeedbackPercentage()}%</li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default Statistics;
