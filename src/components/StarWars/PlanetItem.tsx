import React from "react";

import { Planet } from "../../types";
import { getItemsFromKeys } from "../../utils";
import { HeaderWrapper, PlanetItem as Item, WrapperItem } from "./styles";

interface PlanetItemProps {
  planetKeys: Array<keyof Planet>;
  planet: Planet;
  planetType?: string;
}

const PlanetItem: React.FunctionComponent<PlanetItemProps> = ({
  planetKeys,
  planet,
}) => {
  return (
    <Item>
      {getItemsFromKeys(
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
      )}
    </Item>
  );
};

export default PlanetItem;
