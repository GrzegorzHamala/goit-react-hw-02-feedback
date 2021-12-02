import React from "react";

function Option({
  optionOne,
  optionTwo,
  optionThree,
  goodBtn,
  neutralBtn,
  badBtn,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
})
{
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          goodBtn();
          countTotalFeedback();
          countPositiveFeedbackPercentage();
        }}
        className="button"
      >
        {optionOne}
      </button>
      <button
        type="button"
        onClick={() => {
          neutralBtn();
          countTotalFeedback();
          countPositiveFeedbackPercentage();
        }}
        className="button"
      >
        {optionTwo}
      </button>
      <button
        type="button"
        onClick={() => {
          badBtn();
          countTotalFeedback();
          countPositiveFeedbackPercentage();
        }}
        className="button"
      >
        {optionThree}
      </button>
    </div>
  );
}

export default Option;
