import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SearchBarStyle, SearchResults } from "./SearchBar.style";

const DATA = [
  { name: "Luke Skywalker", id: 1 },
  { name: "Darth Vader", id: 4 },
  { name: "Leia Organa", id: 5 },
];

const SearchBar = () => {
  const [results, setResults] = useState<{ name: string; id: number }[]>([]);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    if (!value) {
      setResults([]);
      return;
    }

    const regex = new RegExp(value, "giu");

    const search = DATA.filter((item) => {
      return regex.test(item.name);
    });

    setResults(search);
  };

  return (
    <SearchBarStyle>
      <input
        type="search"
        onChange={onSearch}
        name="star-wars-search"
        placeholder="Search by character name"
      />

      {results.length > 0 && (
        <SearchResults>
          <ul>
            {results.map((result) => {
              return (
                <li key={result.id}>
                  <Link to={`/character/${result.id}`}>{result.name}</Link>
                </li>
              );
            })}
          </ul>
        </SearchResults>
      )}
    </SearchBarStyle>
  );
};

export default SearchBar;
