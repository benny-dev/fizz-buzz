import "../css/history.css";

function History(prop) {
  const history_list = prop.results_list.map(function (item, i) {
    return (
      <li>
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
        <ul className="history__items">{history_list}</ul>
      </div>
    </div>
  );
}

export default History;
