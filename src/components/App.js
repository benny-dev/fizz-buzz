import React, { useState } from "react";
import Title from "./Title";
import SearchBar from "./SearchBar";
import Result from "./Result";
import History from "./History";

function App() {
  const [txt, setTxt] = useState("");
  const [num, setNum] = useState("");
  const [results, setResults] = useState(() => {
    const resultsFromStorage = localStorage.getItem("results");
    if (resultsFromStorage) {
      return JSON.parse(resultsFromStorage);
    }

    return [];
  });

  function gameLogic(val) {
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

    const newState = [...results, { text: txt, result: num }];

    setResults(newState);
    localStorage.setItem("results", JSON.stringify(newState));
  }

  return (
    <div>
      <Title />
      <SearchBar logic={gameLogic} />
      <Result results={txt} />
      <History resultsList={results} />
    </div>
  );
}

export default App;
