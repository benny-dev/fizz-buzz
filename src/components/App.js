import React, { useState } from "react";
import Title from "./Title";
import SearchBar from "./SearchBar";
import Result from "./Result";

function App() {
  const [txt, setTxt] = useState("");

  function game_logic(val) {
    if (val % 3 === 0 && val % 5 === 0) {
      setTxt("Fizz-Buzz");
    } else if (val % 3 === 0) {
      setTxt("Fizz");
    } else if (val % 5 === 0) {
      setTxt("Buzz");
    } else {
      setTxt(val);
    }
  }

  return (
    <div>
      <Title />
      <SearchBar logic={game_logic} />
      <Result results={txt} />
    </div>
  );
}

export default App;
