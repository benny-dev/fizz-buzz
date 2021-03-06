import "../css/history.css";

function History(prop) {
  const historyList = prop.resultsList
    .slice()
    .reverse()
    .map(function (item, i) {
      return (
        <li key={i}>
          <span>{item.result}</span>
          <span>{item.text}</span>
        </li>
      );
    });

  return (
    <div>
      <div className="history">
        <div className="history__title">
          <h3>History</h3>
        </div>
        <ul className="history__items">{historyList}</ul>
      </div>
    </div>
  );
}

export default History;
