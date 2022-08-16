import React, { useEffect, useRef, useState } from "react";

import { Planet } from "../../types";
import PlanetItem from "./PlanetItem";
import SortIcon from "./SortIcon";
import {
  PlanetHeader,
  PlanetHeaders,
  PlanetList as List,
  Line,
} from "./styles";
import { getItemsFromKeys, sortHandler } from "./utils";

export type PlanetDataObject = {
  planets: Planet[];
  sortedBy: string;
  ascending: boolean | null;
};

const PlanetList: React.FunctionComponent<{
  planets: Planet[];
  active: boolean;
}> = ({ planets, active }) => {
  const [data, setData] = useState<PlanetDataObject>({
    planets,
    sortedBy: "none",
    ascending: null,
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const planetKeys: Array<keyof Planet> = Object.keys(planets[0]) as Array<
    keyof Planet
  >;

  const planetItems = data.planets?.map((planet) => (
    <PlanetItem key={planet?.id} planetKeys={planetKeys} planet={planet} />
  ));

  const planetHeaders = getItemsFromKeys(
    planets[0].__typename,
    planetKeys,
    ["__typename", "id"],
    "name",
    (key, keyName) => (
      <PlanetHeader
        key={key}
        onClick={() => {
          setData(sortHandler(key, data));
        }}
      >
        {keyName}
        <SortIcon
          sortedBy={key}
          order={data.sortedBy}
          ascending={!!data.ascending}
        />
      </PlanetHeader>
    )
  );

  const childListRef = useRef<HTMLLIElement>();

  useEffect(() => {
    console.log(windowWidth);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <List
      active={active}
      ref={childListRef}
      scrollHeight={childListRef.current?.scrollHeight}
      // isResizing={isResizing}
    >
      <PlanetHeaders hidden>{planetHeaders}</PlanetHeaders>
      <Line />
      {planetItems}
    </List>
  );
};

export default PlanetList;
