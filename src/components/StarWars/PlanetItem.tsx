import React from "react";

import { Planet } from "../../types";
import { HeaderWrapper, PlanetItem as Item, WrapperItem } from "./styles";
import { getItemsFromKeys } from "./utils";

interface PlanetItemProps {
  planetKeys: Array<keyof Planet>;
  planet: Planet;
  planetType?: string;
}

const PlanetItem: React.FunctionComponent<PlanetItemProps> = ({
  planetKeys,
  planet,
}) => {
  const planetItems = getItemsFromKeys(
    planet?.__typename,
    planetKeys,
    ["__typename", "id"],
    "name",
    (key, keyName) => (
      <HeaderWrapper key={key}>
        <WrapperItem>{keyName}</WrapperItem>
        <WrapperItem>
          {Array.isArray(planet[key]) ? (
            <span style={{ display: "flex", flexDirection: "column" }}>
              {(planet[key] as Array<any>)?.map((item: any) => (
                <span key={item}>{item}</span>
              ))}
            </span>
          ) : planet[key] ? (
            planet[key]
          ) : (
            "unknown"
          )}
        </WrapperItem>
      </HeaderWrapper>
    )
  );

  return <Item>{planetItems}</Item>;
};

export default PlanetItem;
