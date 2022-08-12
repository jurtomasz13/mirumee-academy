import styled from "styled-components";

import { screen } from "./sizes";

export const ParentList = styled.ul`
  max-width: 1070px;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  background: #e0e6ee;
  list-style: none;
`;

type ParentListElementProps = {
  active?: boolean;
};

export const ParentListElement = styled.li<ParentListElementProps>`
  margin: 15px;
  background: white;
  border-radius: 8px;

  ${(props) => props.active && "border-radius:8px 8px 0 0;"}
`;

export const Title = styled.p`
  display: flex;
  justify-content: space-between;
  padding: 14px 15px;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  background: white;
  color: #00687f;
  border-radius: 4px;
  box-shadow: 0px 4px 12px rgb(224 230 238 / 50%);
`;

type ChildListProps = {
  active?: boolean;
};

export const ChildList: any = styled.ul<ChildListProps>`
  max-height: 0;
  overflow: hidden;
  list-style: none;
  transition: max-height 0.4s, padding 1s;
  border-radius: 8px 8px 0 0;

  ${(props: any) => props.active && `max-height: ${props.scrollHeight}px;`}

  & p {
    display: flex;
  }

  &:not(:first-child) p:first-child span:not(:first-child) {
    color: #00687f;
  }

  @media screen and (${screen.desktop}) {
    ${(props) => props.active && "padding: 5px 8px;"}
  }
`;

export const ChildListElement = styled.li`
  ${(props) => props.hidden && "display: none;"}

  &:not(:first-child) {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
  }

  &:nth-child(2) {
    padding: 20px 0 10px 0;
  }

  &:nth-child(odd) {
    background: rgba(229, 229, 229, 0.5);
  }

  @media screen and (${screen.desktop}) {
    ${(props) => props.hidden && "display: contents;"}

    &:not(:first-child) {
      display: flex;
      flex-direction: row;
    }

    &:nth-child(odd) {
      background: white;
    }
  }
`;

export const Paragraph = styled.p`
  display: flex;

  @media screen and (${screen.desktop}) {
    width: 100%;

    ${ChildListElement}:not(:first-child) & {
      flex: 1;
      width: 0;
    }
  }
`;

export const Span = styled.span`
  ${ChildListElement}:not(:first-child) ${Paragraph}:first-child &:not(:first-child) {
    color: #00687f;
  }

  ${ChildListElement} ${Paragraph} & {
    display: flex;
    flex: 1;
    width: 0;
    align-items: center;
    height: 35px;
    margin: 5px 16px;
    font-size: 15px;
  }

  ${ChildListElement}:not(:first-child) ${Paragraph} &:not(:first-child) {
    word-break: break-all;
  }

  @media screen and (${screen.desktop}) {
    ${ChildListElement}:not(:first-child) ${Paragraph} &:not(:first-child) {
      text-align: right;
    }

    ${ChildListElement} ${Paragraph}:first-child &:first-child {
      color: #00687f;
      cursor: pointer;
      user-select: none;
    }

    ${ChildListElement}:first-child ${Paragraph} &:not(:first-child) {
      text-align: right;
      justify-content: right;
      cursor: pointer;
      user-select: none;
    }

    ${ChildListElement} ${Paragraph}:not(:first-child) & {
      justify-content: right;
    }

    ${ChildListElement}:not(:first-child) ${Paragraph} &:first-child {
      display: none;
    }
  }
`;
