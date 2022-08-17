import React, { useState } from "react";

import Collapse from "../../assets/icons/collapse.svg";
import Expand from "../../assets/icons/expand.svg";
import { Planet } from "../../types";
import PlanetList from "./PlanetList";
import { FilmItem as Item, FilmTitle } from "./styles";

const FilmItem: React.FunctionComponent<{
  title: string;
  planets: Planet[];
}> = ({ title, planets }) => {
  const [isActive, setIsActive] = useState(false);

  const onClickListElement = () => {
    setIsActive(!isActive);
  };

  return (
    <Item active={isActive}>
      <FilmTitle onClick={onClickListElement}>
        {title}
        <img src={isActive ? Collapse : Expand} alt="expand-icon" />
      </FilmTitle>
      <PlanetList active={isActive} planets={planets} />
    </Item>
  );
};

export default FilmItem;
