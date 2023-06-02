import React from "react";
import Form from "../Form";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <Form
        onGuess={(guess) =>
          setGuesses((prevGuesses) => [...prevGuesses, guess])
        }
      />
    </>
  );
}

export default Game;
