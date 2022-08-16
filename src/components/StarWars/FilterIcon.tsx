import React from "react";
import styled from "styled-components";

import SortDown from "../../assets/icons/sortDown.svg";
import SortUp from "../../assets/icons/sortUp.svg";

const Span = styled.span`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 10px;
  transform: scale(1.25);

  & * {
    flex: 1 1;
  }
`;

const FilterIcon: React.FunctionComponent = () => {
  return (
    <Span>
      <img src={SortUp} alt="arrow-icon-up" style={{ marginBottom: "1px" }} />
      <img src={SortDown} alt="arrow-icon-down" style={{ marginTop: "1px" }} />
    </Span>
  );
};

export default FilterIcon;
