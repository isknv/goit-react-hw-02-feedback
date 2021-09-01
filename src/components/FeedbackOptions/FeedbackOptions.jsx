import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ leaveFeedback, options }) => {
  return (
    <>
      <div>
        {options.map(option => (
          <button onClick={leaveFeedback} name={option} key={option}>
            {option}
          </button>
        ))}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
