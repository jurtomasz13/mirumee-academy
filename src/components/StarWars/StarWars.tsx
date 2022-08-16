import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import React, { useEffect } from "react";

import Loader from "../../assets/gifs/loading.gif";
import Logo from "../../assets/images/logo.png";
import { client } from "../../graphql/client";
import FilmList from "./FilmList";
import { StarWarsContainer } from "./styles";

export const StarWars: React.FunctionComponent = () => {
  const { data, error, isError, refetch, isFetching } = usePlanets();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <StarWarsContainer>
      <img
        src={Logo}
        alt="logo"
        style={{
          display: "block",
          maxWidth: "100%",
          margin: "0 auto 16px",
          padding: "0 10px",
        }}
      />
      {isFetching ? (
        <img
          src={Loader}
          alt="loader"
          style={{ display: "block", margin: "20px auto" }}
        />
      ) : (
        <FilmList films={data} />
      )}
      {/* @ts-ignore */}
      {isError && `Error: ${(<span>{error.message}</span>)}`}
    </StarWarsContainer>
  );
};

function usePlanets() {
  return useQuery(
    ["getFilmsPlanets"],
    async () => {
      const data = await client.request(
        gql`
          query {
            allFilms {
              films {
                id
                title
                planetConnection {
                  planets {
                    __typename
                    id
                    name
                    rotationPeriod
                    orbitalPeriod
                    diameter
                    climates
                    surfaceWater
                    population
                  }
                }
              }
            }
          }
        `
      );
      return data.allFilms.films;
    },
    { enabled: false }
  );
}

export default StarWars;
