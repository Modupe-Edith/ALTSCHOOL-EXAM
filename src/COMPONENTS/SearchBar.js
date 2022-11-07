import axios from "axios";
import React, { useState } from "react";
import Result from "./Result";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [repos, setRepos] = useState([]);

   const handleChange = (e) => {
     setSearchInput(e.target.value);
   };

  const handleClick = async () => {
    console.log(searchInput);
    try {
      const result = await axios(
        "https://api.github.com/users/Modupe-Edith/repos"
      );    
      console.log("My Result: ",result)
      setRepos(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="search-form">
        <input
          type="text"
          placeholder="search"
          value={searchInput}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Search</button>
      </div>
      <Result repos={repos} />
    </>
  );
};
export default SearchBar;
