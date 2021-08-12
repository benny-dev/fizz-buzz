import React, { useState } from "react";
import swal from "sweetalert";
import "../css/searchbar.css";

function SearchBar(prop) {
  const [number, setNumber] = useState("");

  function formSubmit(e) {
    e.preventDefault();
    const val = parseInt(number);

    if (!isNaN(val)) {
      console.log("yes");
      if (val <= 100) {
        prop.logic(val);
      } else {
        swal("Error!", "Enter a number between 1 and 100", "error");
      }
    } else {
      swal("Error!", "Value must be a digit betweent 1 and 100", "error");
      console.log("no");
    }
  }

  return (
    <div className="search">
      <form className="search-bar" onSubmit={formSubmit}>
        <div className="ui input">
          <input
            type="text"
            placeholder="enter a number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></input>
        </div>
        <button className="ui primary button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
