import "../css/results.css";

function Result(prop) {
  return (
    <div>
      <div className="results">
        <p className="results__text">Results: </p>
        <p className="results__value">{prop.results}</p>
      </div>
    </div>
  );
}

export default Result;
