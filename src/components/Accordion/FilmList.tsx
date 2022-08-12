import React from "react";
import styled from "styled-components";

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
}> = ({ films }) => {
  const data = films?.map((film) => (
    <FilmItem
      key={film?.id}
      title={film.title}
      planets={film.planetConnection.planets}
    />
  ));

  return (
    <ParentList>
      <Img src={Logo} alt="logo" />
      {data}
    </ParentList>
  );
};

export default FilmList;
