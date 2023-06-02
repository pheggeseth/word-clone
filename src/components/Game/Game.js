import React from "react";
import Guess from "../Guess";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import PastGuesses from "../PastGuesses/PastGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  return (
    <>
      <PastGuesses guesses={guesses} />
      <Guess
        onGuess={(guess) =>
          setGuesses((prevGuesses) => [...prevGuesses, guess])
        }
      />
    </>
  );
}

export default Game;
