import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);

  return (
    <p className="guess">
      {result ? (
        result.map(({ letter, status }, index) => (
          <span key={index} className={`cell ${status}`}>
            {letter}
          </span>
        ))
      ) : (
        <>
          <span className="cell" />
          <span className="cell" />
          <span className="cell" />
          <span className="cell" />
          <span className="cell" />
        </>
      )}
    </p>
  );
}

export default Guess;
