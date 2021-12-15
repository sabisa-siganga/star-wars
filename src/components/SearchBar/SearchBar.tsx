import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalState } from "../../GlobalState/GlobalState";
import { Character } from "../../interface/character";
import { SearchBarStyle, SearchResults } from "./SearchBar.style";

const CHARACTER_SEARCH = gql`
  query ($search: String!) {
    characterSearch(search: $search) {
      id
      name
      characterImage
      birthYear
      height
      mass
      gender
      hairColor
      eyeColor
      skinColor
      homeWorld {
        image
        name
        population
        size
      }
    }
  }
`;

const SearchBar = () => {
  const [results, setResults] = useState<Character[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const { loading, error, data } = useQuery(CHARACTER_SEARCH, {
    variables: {
      search: searchValue,
    },
  });

  const { dispatch } = useContext(GlobalState);

  useEffect(() => {
    if (!loading && !error && data) {
      const characters = data.characterSearch;

      setResults(characters);
    }
  }, [data, error, loading]);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    if (value.length === 0) {
      setResults([]);

      return;
    }

    setSearchValue(value);
  };

  const onClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    character: Character
  ) => {
    event.preventDefault();

    setResults([]);

    dispatch({
      type: "UPDATE_CHARACTER",
      payload: character,
    });

    navigate(`/character/${character.id}`);
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
                    onClick={(event) => {
                      onClick(event, result);
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
