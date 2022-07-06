import React, { useState } from "react";
import "./Search.css";

const onClick = (value) => {
  return console.log(value);
};

function Search() {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="search-bar">
      <form>
        <input
          className="input-bar"
          placeholder="SEARCH"
          type="text"
          value={search}
          onChange={onChange}
        />
        <input type="submit" value={"O"} onClick={onClick}></input>
      </form>
    </div>
  );
}

export default Search;
