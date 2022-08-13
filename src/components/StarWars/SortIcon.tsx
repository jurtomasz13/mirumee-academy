import React from "react";
import styled from "styled-components";

import SortActiveDown from "../../assets/icons/sortActiveDown.svg";
import SortActiveUp from "../../assets/icons/sortActiveUp.svg";
import SortDown from "../../assets/icons/sortDown.svg";
import SortUp from "../../assets/icons/sortUp.svg";

const Span = styled.span`
  display: flex;
  flex-direction: column;
  align-self: center;
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
  return (
    <Span>
      <img
        src={sortedBy === order && !ascending ? SortActiveUp : SortUp}
        alt="arrow-icon-up"
      />
      <img
        src={sortedBy === order && ascending ? SortActiveDown : SortDown}
        alt="arrow-icon-down"
      />
    </Span>
  );
};

export default SortIcon;
