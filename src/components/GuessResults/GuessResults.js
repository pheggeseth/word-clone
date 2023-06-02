import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess";

function GuessResults(props) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((guessIndex) => (
        <Guess key={guessIndex} value={props.guesses[guessIndex]} />
      ))}
    </div>
  );
}

export default GuessResults;
