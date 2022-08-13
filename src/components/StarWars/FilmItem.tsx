import React, { useState } from "react";

import Collapse from "../../assets/icons/collapse.svg";
import Expand from "../../assets/icons/expand.svg";
import { Title, ParentListElement } from "../../styles";
import { Planet } from "../../types";
import PlanetList from "./PlanetList";

const FilmItem: React.FunctionComponent<{
  title: string;
  planets: Planet[];
}> = ({ title, planets }) => {
  const [isActive, setIsActive] = useState(false);

  const onClickListElement = () => {
    setIsActive(!isActive);
  };

  return (
    <ParentListElement active={isActive}>
      <Title onClick={onClickListElement}>
        {title}
        <img src={isActive ? Collapse : Expand} alt="icon" />
      </Title>
      <PlanetList active={isActive} planets={planets} />
    </ParentListElement>
  );
};

export default FilmItem;
