import React, { useState } from "react";
import Title from "./Title";
import SearchBar from "./SearchBar";
import Result from "./Result";
import History from "./History";

function App() {
  const [txt, setTxt] = useState("");
  const [num, setNum] = useState("");
  const results = [];

  function game_logic(val) {
    if (val % 3 === 0 && val % 5 === 0) {
      setTxt("Fizz-Buzz");
      setNum(val);
    } else if (val % 3 === 0) {
      setTxt("Fizz");
      setNum(val);
    } else if (val % 5 === 0) {
      setTxt("Buzz");
      setNum(val);
    } else {
      setTxt(val);
      setNum(val);
    }
  }

  results.push({ result: num, text: txt });

  return (
    <div>
      <Title />
      <SearchBar logic={game_logic} />
      <Result results={txt} />
      <History results_list={results} />
    </div>
  );
}

export default App;
