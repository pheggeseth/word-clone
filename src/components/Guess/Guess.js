import React from "react";

function Guess({ value }) {
  return (
    <p className="guess">
      {(value ? value.split("") : ["", "", "", "", ""]).map((letter, index) => (
        <span key={index} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
