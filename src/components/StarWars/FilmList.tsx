import React from "react";

import { Film } from "../../types";
import FilmItem from "./FilmItem";

const FilmList: React.FunctionComponent<{
  films: Film[];
}> = ({ films }) => {
  return (
    <>
      {films?.map((film) => (
        <FilmItem
          key={film?.id}
          title={film.title}
          planets={film.planetConnection.planets}
        />
      ))}
    </>
  );
};

export default FilmList;
