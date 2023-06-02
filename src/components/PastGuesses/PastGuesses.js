import React from "react";

function PastGuesses(props) {
  return (
    <div className="guess-results">
      {props.guesses.map((guess, index) => (
        <p key={index} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default PastGuesses;
