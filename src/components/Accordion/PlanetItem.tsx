import React from "react";
import styled from "styled-components";

import { ChildListElement, Paragraph, Span } from "../../styles";
import { screen } from "../../styles/sizes";
import { Planet } from "../../types";

const SpanForAdditionalText = styled.span`
  display: flex;
  flex-direction: column;

  @media screen and (${screen.desktop}) {
    align-items: end;
  }
`;

const PlanetItem: React.FunctionComponent<Planet> = (props) => {
  return (
    <ChildListElement>
      <Paragraph>
        <Span>Planet Name</Span>
        <Span>{props.name ? props.name : "unknown"}</Span>
      </Paragraph>
      <Paragraph>
        <Span>Rotation Period</Span>
        <Span>{props.rotationPeriod ? props.rotationPeriod : "unknown"}</Span>
      </Paragraph>
      <Paragraph>
        <Span>Orbital Period</Span>
        <Span>{props.orbitalPeriod ? props.orbitalPeriod : "unknown"}</Span>
      </Paragraph>
      <Paragraph>
        <Span>Diameter</Span>
        <Span>{props.diameter ? props.diameter : "unknown"}</Span>
      </Paragraph>
      <Paragraph>
        <Span>Climate</Span>
        <Span>
          <SpanForAdditionalText>
            {props.climates
              ? props.climates?.map((el) => (
                  <span key={el.toString()}>{el}</span>
                ))
              : "unknown"}
          </SpanForAdditionalText>
        </Span>
      </Paragraph>
      <Paragraph>
        <Span>Surface Water</Span>
        <Span>{props.surfaceWater ? props.surfaceWater : "unknown"}</Span>
      </Paragraph>
      <Paragraph>
        <Span>Population</Span>
        <Span>{props.population ? props.population : "unknown"}</Span>
      </Paragraph>
    </ChildListElement>
  );
};

export default PlanetItem;
