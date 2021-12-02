import React, { Component } from "react";
import Option from "../options/option";
import SectionTitle from "../sectionTitle/sectionTitle";
import Message from "../messages/notificationMessage";
import "./statistics.css";

const option = {
  optionOne: "Good",
  optionTwo: "Neutral",
  optionThree: "Bad",
};

class statistics extends Component {
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
    total: this.props.total,
    percentage: this.props.percentage,
  };

  goodBtn = () => {
    this.setState((state, props) => ({ good: state.good + props.step }));
  };
  neutralBtn = () => {
    this.setState((state, props) => ({ neutral: state.neutral + props.step }));
  };
  badBtn = () => {
    this.setState((state, props) => ({ bad: state.bad + props.step }));
  };

  countTotalFeedback = () => {
    this.setState((state) => ({
      total: state.good + state.neutral + state.bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState((state) => ({
      percentage: Math.round(
        (state.good / (state.good + state.neutral + state.bad)) * 100
      ),
    }));
  };

  render() {
    const { good, neutral, bad, total, percentage } = this.state;
    // const { message } = this.props;

    return (
      <div>
        <SectionTitle title={"Please leave a feedback"}>
          <Option
            {...option}
            goodBtn={this.goodBtn}
            neutralBtn={this.neutralBtn}
            badBtn={this.badBtn}
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
          />
        </SectionTitle>

        <SectionTitle title={"Statistics"}>
          {this.state.total > 0 ? (
            <div className="stats">
              <span className="counter">Good: {good}</span>
              <span className="counter">Neutral: {neutral}</span>
              <span className="counter">Bad: {bad}</span>
              <span className="total">Total: {total}</span>
              <span className="Percentage">
                {" "}
                Positive feedback: {percentage}%
              </span>
            </div>
          ) : (
            <Message message={"No feedback given"} />
          )}
        </SectionTitle>
      </div>
    );
  }
}
export default statistics;
