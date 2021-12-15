import { gql, useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import { GlobalState } from "../../GlobalState/GlobalState";
import Tile from "../Tile";
import { TileContainerStyle } from "./TileContainer.style";

const CHARACTER_LIST_QUERY = gql`
  query ($page: Int) {
    characters(page: $page) {
      list {
        id
        name
        characterImage
        height
        birthYear
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
      pagination {
        next
        prev
        totalPages
      }
    }
  }
`;

type Props = {
  page: number;
};

const TileContainer = (props: Props) => {
  const { page } = props;

  const { loading, error, data } = useQuery(CHARACTER_LIST_QUERY, {
    variables: {
      page,
    },
  });
  const { dispatch } = useContext(GlobalState);

  useEffect(() => {
    if (!loading && !error && data) {
      dispatch({
        type: "ADD_CHARACTERS",
        payload: {
          list: data.characters.list,
          pagination: data.characters.pagination,
        },
      });
    }
  }, [data, error, loading, dispatch]);

  const { characterList } = useContext(GlobalState).state;

  return (
    <TileContainerStyle>
      {!loading &&
        characterList.list.map((character) => {
          return <Tile info={character} key={character.id} />;
        })}

      {loading && <>Loading data</>}
    </TileContainerStyle>
  );
};

export default TileContainer;
