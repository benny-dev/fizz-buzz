import "../css/results.css";

function Result(prop) {
  const results = prop.results[prop.results.length - 1]?.result || " ";

  return (
    <div>
      <div className="results">
        <p className="results__text">Results: </p>
        <p className="results__value">{results}</p>
      </div>
    </div>
  );
}

export default Result;
