import React from "react";

function FeedbackStats({ feedback }) {
  let average = feedback.reduce((accu,current) => {
    return accu + current.rating
  },0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/,'')
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;