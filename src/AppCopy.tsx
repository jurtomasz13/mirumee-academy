import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import React from "react";

import { Button } from "./components/Button";
import { client } from "./graphql/client";

const REST_URI = "https://swapi.dev/api";

const containerStyles = {
  display: "flex",
  justifyContent: "center",
  marginTop: "1rem",
};

type Movie = {
  id: number;
  title: string;
};

function App() {
  const [clickNumber, setClickNumber] = React.useState(0);
  const [reset, setReset] = React.useState(false);
  const [movies, setMovies] = React.useState<any[]>([]);

  const { isError, data, error, refetch, isFetching } = useFilms();

  const fetchFilms = async () => {
    const data = await fetch(`${REST_URI}/films/`, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    });

    const movies = await data.json();
    setMovies(movies.results);

    return movies;
  };

  return (
    <div className="appContainer">
      <div style={{ marginBottom: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => {
              setReset(false);
              setClickNumber(clickNumber + 1);
            }}
            style={{ marginRight: "1rem" }}
          >
            Click me
          </Button>
          <Button
            variant="error"
            onClick={() => {
              setReset(true);
              setClickNumber(0);
            }}
          >
            Reset
          </Button>
        </div>
        {!!clickNumber && (
          <div style={containerStyles}>
            <span>Button was clicked {clickNumber} times</span>
          </div>
        )}
        {reset && (
          <div style={containerStyles}>
            <span>
              Number of clicks was reset and now shows {clickNumber} clicks
            </span>
          </div>
        )}
      </div>

      <div style={containerStyles}>
        <div style={{ marginRight: "1rem" }}>
          <Button onClick={() => refetch()}>Fetch Films with GraphQL</Button>
        </div>
        <div>
          <Button onClick={() => fetchFilms()}>Fetch Films with REST</Button>
        </div>
      </div>
      <div style={{ margin: "0 auto" }}>
        {data && (
          <ul>
            {data.films.map((film: Movie) => (
              <li key={film.id}>{film.title}</li>
            ))}
          </ul>
        )}
        {!!movies.length && (
          <ul>
            {movies.map((movie: Movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        )}
        {isError && (
          /* @ts-ignore */
          <span>Error: {error.message}</span>
        )}
        <div>{isFetching && "Fetching..."}</div>
      </div>
    </div>
  );
}

function useFilms() {
  return useQuery(
    ["getFilms"],
    async () => {
      const data = await client.request(
        gql`
          query {
            allFilms {
              films {
                id
                title
              }
            }
          }
        `
      );
      return data.allFilms;
    },
    { enabled: false }
  );
}

export default App;
