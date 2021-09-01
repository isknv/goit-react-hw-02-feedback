import React from "react";
import Section from "../Section/Section";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";

export default class Main extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = event => {
    const name = event.target.name;
    this.setState(prev => ({
      [name]: (prev[name] += 1),
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    return parseInt((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <Section title={"Please leave feedback"} />
          <FeedbackOptions
            leaveFeedback={this.leaveFeedback}
            options={Object.keys(this.state)}
          />
          {this.countTotalFeedback() ? (
            <Statistics
              title={"Statistics"}
              options={this.state}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </div>
      </>
    );
  }
}
