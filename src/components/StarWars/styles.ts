import styled from "styled-components";

type Screen = {
  desktop: string;
};

export const desktop: number = 955;

export const screen: Screen = {
  desktop: `min-width: ${desktop}px`,
};

const List = styled.ul`
  list-style: none;
`;

export const StarWarsContainer = styled(List)`
  max-width: 1150px;
  margin: auto;
  padding: 32px 0;
  overflow: hidden;
  background: #e0e6ee;
  border-radius: 8px;
  overflow-wrap: anywhere;

  @media screen and (${screen.desktop}) {
    padding: 32px 30px;
  }
`;

export const FilmItem = styled.li<{ active?: boolean }>`
  display: block;
  margin: 16px;
  background: #fff;
  border-radius: ${({ active }) => (active ? "4px 4px 0 0" : "4px")};
  box-shadow: 0px 2px 1px rgba(196, 196, 196, 0.2);
`;

export const FilmTitle = styled.button`
  display: flex;
  justify-content: space-between;
  text-align: start;
  width: 100%;
  background: none;
  color: #00687f;
  border: none;
  padding: 15px 15px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 4px 12px rgba(224, 230, 238, 0.5);
`;

export const PlanetList = styled(List)<{
  active?: boolean;
  // :(
  ref?: any;
  scrollHeight?: number | undefined;
}>`
  max-height: ${({ active, scrollHeight }) =>
    active ? scrollHeight + "px" : 0};
  overflow: hidden;
  transition: max-height 0.6s;

  @media screen and (${screen.desktop}) {
    padding: 0 16px;

    &::before,
    &::after {
      content: "";
      display: block;
      height: 10px;
    }
  }
`;

export const PlanetHeaders = styled.li`
  display: none;

  @media screen and (${screen.desktop}) {
    display: flex;
  }
`;

export const PlanetItem = styled.li`
  width: 100%;
  padding: 17px 0;

  &:nth-child(even) {
    background: rgba(229, 229, 229, 0.5);
  }

  @media screen and (${screen.desktop}) {
    display: flex;
    padding: 10px 0;

    &:nth-child(even) {
      background: #fff;
    }
  }
`;

export const PlanetHeader = styled.span`
  display: flex;
  flex: 1 1;
  width: 0;
  padding: 15px 10px;
  text-align: right;
  align-items: center;
  cursor: pointer;
  user-select: none;

  &:first-child {
    text-align: left;
    color: #00687f;
  }

  &:not(:first-child) {
    justify-content: right;
  }
`;

export const HeaderWrapper = styled.p`
  display: flex;
  align-items: center;

  @media screen and (${screen.desktop}) {
    width: 100%;
  }
`;

export const WrapperItem = styled.span`
  flex: 1 1;
  width: 0;
  padding: 10px 10px;
  font-size: 16px;

  ${HeaderWrapper}:first-child &:not(:first-child) {
    color: #00687f;
  }

  @media screen and (${screen.desktop}) {
    &:first-child {
      display: none;
    }

    ${HeaderWrapper}:first-child &:not(:first-child) {
      color: #00687f;
    }

    ${HeaderWrapper}:not(:first-child) &:not(:first-child) {
      text-align: right;
      justify-content: right;
    }
  }
`;

export const Line = styled.hr`
  display: none;

  @media screen and (${screen.desktop}) {
    display: block;
    width: 96%;
    margin: auto;
  }
`;
