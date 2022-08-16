import React from "react";

import { Film } from "../../types";
import FilmItem from "./FilmItem";

const FilmList: React.FunctionComponent<{
  films: Film[];
}> = ({ films }) => {
  const filmItems = films?.map((film) => (
    <FilmItem
      key={film?.id}
      title={film.title}
      planets={film.planetConnection.planets}
    />
  ));

  return <>{filmItems}</>;
};

export default FilmList;
