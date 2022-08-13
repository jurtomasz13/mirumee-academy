import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { ChildList, ChildListElement, Paragraph, Span } from "../../styles";
import { Planet } from "../../types";
import PlanetItem from "./PlanetItem";
import SortIcon from "./SortIcon";

const Line = styled.hr`
  width: 95%;
  border: 1px solid #c4c4c4;
  margin: 5px auto 0;
`;

const PlanetList: React.FunctionComponent<{
  planets: Planet[];
  active: boolean;
}> = ({ planets, active }) => {
  const [data, setData] = useState({
    planets,
    sortedBy: "none",
    ascending: null,
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const planetItems = data.planets?.map((planet) => (
    <PlanetItem key={planet?.id} {...planet} />
  ));

  const childListRef = useRef<HTMLLIElement>();

  const sortHandler = (type: keyof Planet) => {
    const CONDITION =
      data.sortedBy === type &&
      !!(data.ascending === false || data.ascending === null);

    const sortedData = [...data.planets].sort((a, b) => {
      if (type === "climates") {
        const stringA = a?.climates?.join("");
        const stringB = b?.climates?.join("");

        if (CONDITION) {
          if (stringA > stringB) return -1;
          if (stringA < stringB) return 1;
        } else {
          if (stringA > stringB) return 1;
          if (stringA < stringB) return -1;
        }
        return 0;
      }

      if (CONDITION) {
        if (a[type] > b[type]) return -1;
        if (a[type] < b[type]) return 1;
      } else {
        if (a[type] > b[type]) return 1;
        if (a[type] < b[type]) return -1;
      }
      return 0;
    });

    const dataObject: any = {
      planets: sortedData,
      sortedBy: type,
      ascending: CONDITION,
    };

    setData(dataObject);
  };

  useEffect(() => {
    console.log(windowWidth + "px");
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <ChildList
      active={active}
      ref={childListRef}
      scrollHeight={childListRef.current?.scrollHeight}
    >
      <ChildListElement hidden>
        <Paragraph>
          <Span onClick={() => sortHandler("name")}>
            Planet Name
            <SortIcon
              sortedBy="name"
              order={data.sortedBy}
              ascending={!!data.ascending}
            />
          </Span>
          <Span onClick={() => sortHandler("rotationPeriod")}>
            Rotation Period
            <SortIcon
              sortedBy="rotationPeriod"
              order={data.sortedBy}
              ascending={!!data.ascending}
            />
          </Span>
          <Span onClick={() => sortHandler("orbitalPeriod")}>
            Orbital Period
            <SortIcon
              sortedBy="orbitalPeriod"
              order={data.sortedBy}
              ascending={!!data.ascending}
            />
          </Span>
          <Span onClick={() => sortHandler("diameter")}>
            Diameter
            <SortIcon
              sortedBy="diameter"
              order={data.sortedBy}
              ascending={!!data.ascending}
            />
          </Span>
          <Span onClick={() => sortHandler("climates")}>
            Climate
            <SortIcon
              sortedBy="climates"
              order={data.sortedBy}
              ascending={!!data.ascending}
            />
          </Span>
          <Span onClick={() => sortHandler("surfaceWater")}>
            Surface Water
            <SortIcon
              sortedBy="surfaceWater"
              order={data.sortedBy}
              ascending={!!data.ascending}
            />
          </Span>
          <Span onClick={() => sortHandler("population")}>
            Population
            <SortIcon
              sortedBy="population"
              order={data.sortedBy}
              ascending={!!data.ascending}
            />
          </Span>
        </Paragraph>
        <Line />
      </ChildListElement>
      {planetItems}
    </ChildList>
  );
};

export default PlanetList;
