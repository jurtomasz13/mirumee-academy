import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import React from "react";

import { client } from "../../graphql/client";
import FilmList from "./FilmList";

export const StarWars: React.FunctionComponent = () => {
  const { data, error, isError, isFetching } = usePlanets();

  return (
    <>
      <FilmList films={data} isFetching={isFetching} />
      {/* @ts-ignore */}
      {isError && `Error: ${(<span>{error.message}</span>)}`}
    </>
  );
};

function usePlanets() {
  return useQuery(["getFilmsPlanets"], async () => {
    const data = await client.request(
      gql`
        query {
          allFilms {
            films {
              id
              title
              planetConnection {
                planets {
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
  });
}

export default StarWars;
