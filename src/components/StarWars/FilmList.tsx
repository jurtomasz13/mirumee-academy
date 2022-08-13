import React from "react";
import styled from "styled-components";

import Loader from "../../assets/gifs/loading.gif";
import Logo from "../../assets/images/logo.png";
import { ParentList } from "../../styles";
import { Film } from "../../types";
import FilmItem from "./FilmItem";

const Img = styled.img`
  display: block;
  max-width: 100%;
  margin: auto;
`;

const FilmList: React.FunctionComponent<{
  films: Film[];
  isFetching: boolean;
}> = ({ films, isFetching }) => {
  const filmItems = films?.map((film) => (
    <FilmItem
      key={film?.id}
      title={film.title}
      planets={film.planetConnection.planets}
    />
  ));

  return (
    <ParentList>
      <Img src={Logo} alt="logo" />
      {isFetching ? (
        <Img src={Loader} alt="logo" style={{ margin: "20px auto" }} />
      ) : (
        filmItems
      )}
    </ParentList>
  );
};

export default FilmList;
