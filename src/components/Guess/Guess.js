import React from "react";

function Guess() {
  const [value, setValue] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ guess: value.toUpperCase() });
        setValue("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <p id="hint">Must be 5 letters</p>
      <input
        id="guess-input"
        type="text"
        pattern="\w{5}"
        aria-describedby="hint"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </form>
  );
}

export default Guess;
