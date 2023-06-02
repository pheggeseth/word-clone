import React from "react";
import Form from "../Form";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [result, setResult] = React.useState();

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <Form
        disabled={!!result}
        onGuess={(guess) => {
          const nextGuesses = [...guesses, guess];
          setGuesses(nextGuesses);

          if (
            checkGuess(guess, answer).every(
              ({ status }) => status === "correct"
            )
          ) {
            setResult("win");
          } else if (nextGuesses.length === 6) {
            setResult("lose");
          }
        }}
      />
      {result === "win" ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {guesses.length} {guesses.length === 1 ? "guess" : "guesses"}
            </strong>
            .
          </p>
        </div>
      ) : result === "lose" ? (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      ) : null}
    </>
  );
}

export default Game;
