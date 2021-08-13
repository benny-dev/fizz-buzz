import React, { useCallback, useState } from "react";
import Title from "./Title";
import SearchBar from "./SearchBar";
import Result from "./Result";
import History from "./History";

function App() {
  const [results, setResults] = useState(() => {
    const resultsFromStorage = localStorage.getItem("results");
    if (resultsFromStorage) {
      return JSON.parse(resultsFromStorage);
    }

    return [];
  });

  const gameLogic = useCallback(
    (val) => {
      let text = val;

      if (val % 3 === 0 && val % 5 === 0) {
        text = "fizz-buzz";
      } else if (val % 3 === 0) {
        text = "Fizz";
      } else if (val % 5 === 0) {
        text = "Buzz";
      }

      const newState = [...results, { text, result: val }];

      setResults(newState);
      localStorage.setItem("results", JSON.stringify(newState));
    },
    [results]
  );

  return (
    <div>
      <Title />
      <SearchBar logic={gameLogic} />
      <Result results={results} />
      <History resultsList={results} />
    </div>
  );
}

export default App;
