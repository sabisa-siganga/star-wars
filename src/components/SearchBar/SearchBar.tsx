import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SearchBarStyle, SearchResults } from "./SearchBar.style";

const DATA = [
  { name: "Luke Skywalker", id: 1 },
  { name: "Darth Vader", id: 4 },
  { name: "Leia Organa", id: 5 },
];

const SearchBar = () => {
  const [results, setResults] = useState<
    {
      name: string;
      id: number;
    }[]
  >([]);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    if (value.length === 0) {
      setResults([]);

      return;
    }

    // TODO: Make request to API

    const regex = new RegExp(value, "giu");

    const searchInfo = DATA.filter((item) => {
      if (regex.test(item.name)) {
        return true;
      } else {
        return false;
      }
    });

    setResults(searchInfo);
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
                  <Link
                    onClick={() => {
                      setResults([]);
                    }}
                    to={`/character/${result.id}`}
                  >
                    {result.name}
                  </Link>
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
