import React, { useEffect, useRef, useState } from "react";

import { Planet, SortDataObject } from "../../types";
import { getItemsFromKeys, sortHandler } from "../../utils";
import PlanetItem from "./PlanetItem";
import SortIcon from "./SortIcon";
import {
  PlanetHeader,
  PlanetHeaders,
  PlanetList as List,
  Line,
} from "./styles";

const PlanetList: React.FunctionComponent<{
  planets: Planet[];
  active: boolean;
}> = ({ planets, active }) => {
  const planetListRef = useRef<HTMLUListElement>();

  const [details, setDetails] = useState<
    SortDataObject<Planet, keyof Planet | string>
  >({
    data: planets,
    sortedBy: "none",
    ascending: null,
  });

  const [listHeight, setListHeight] = useState(
    planetListRef.current?.scrollHeight
  );

  const planetKeys: Array<keyof Planet> = Object.keys(planets[0]) as Array<
    keyof Planet
  >;

  const planetHeaders = getItemsFromKeys(
    planets[0].__typename,
    planetKeys,
    ["__typename", "id"],
    "name",
    (key, keyName) => (
      <PlanetHeader
        key={key}
        onClick={() => {
          setDetails(sortHandler(key, details));
        }}
      >
        {keyName}
        <SortIcon
          sortedBy={key}
          order={details.sortedBy}
          ascending={!!details.ascending}
        />
      </PlanetHeader>
    )
  );

  const planetItems = details.data?.map((planet) => (
    <PlanetItem key={planet?.id} planetKeys={planetKeys} planet={planet} />
  ));

  useEffect(() => {
    setListHeight(planetListRef.current?.scrollHeight);

    const resizeHandler = () => {
      if (planetListRef.current?.scrollHeight !== listHeight) {
        setListHeight(planetListRef.current?.scrollHeight);
      }
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [listHeight]);

  return (
    <List ref={planetListRef} active={active} scrollHeight={listHeight}>
      <PlanetHeaders hidden>{planetHeaders}</PlanetHeaders>
      <Line />
      {planetItems}
    </List>
  );
};

export default PlanetList;
