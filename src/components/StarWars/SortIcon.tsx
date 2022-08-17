import React from "react";
import styled from "styled-components";

import SortActiveDown from "../../assets/icons/sortActiveDown.svg";
import SortDown from "../../assets/icons/sortDown.svg";
import SortUp from "../../assets/icons/sortUp.svg";

const Wrapper = styled.span`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 10px;
  transform: scale(1.25);
`;

type SortIconProps = {
  sortedBy?: string;
  order?: string;
  ascending?: boolean;
};

const SortIcon: React.FunctionComponent<SortIconProps> = ({
  sortedBy,
  order,
  ascending,
}) => {
  const CONDITION = sortedBy === order && !ascending;

  const marginOnActive = {
    transform: CONDITION && "rotate(180deg)",
  } as React.CSSProperties;

  return (
    <Wrapper>
      <img
        src={CONDITION ? SortActiveDown : SortUp}
        alt="arrow-icon-up"
        style={marginOnActive}
      />
      <img
        src={sortedBy === order && ascending ? SortActiveDown : SortDown}
        alt="arrow-icon-down"
      />
    </Wrapper>
  );
};

export default SortIcon;
