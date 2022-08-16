import { ReactNode } from "react";

import { Planet } from "../../types";
import { PlanetDataObject } from "./PlanetList";

export const variableNamingToNormal = (name: string) => {
  let normal: string = "";
  let first: boolean = true;

  for (let i = 0; i < name.length; i++) {
    if (first) {
      normal += name[i].toUpperCase();
      first = false;
      continue;
    }

    if (name[i] === name[i].toUpperCase()) {
      normal += " " + name[i].toUpperCase();
    }

    if (name[i] === name[i].toLowerCase()) {
      normal += name[i];
    }
  }

  return normal;
};

export const getItemsFromKeys = (
  typeName: string,
  keys: Array<keyof Planet>,
  ignoredKeys: string[],
  nameKey: string,
  jsx: (key: keyof Planet, keyString: string) => ReactNode
) => {
  return keys.map((key) => {
    let keyString = variableNamingToNormal(key.toString());

    if (ignoredKeys.includes(key)) return null;

    if (key === nameKey) {
      keyString = typeName + " " + key.charAt(0).toUpperCase() + key.slice(1);
    }

    return jsx(key, keyString);
  });
};

export const sortHandler = (type: keyof Planet, data: PlanetDataObject) => {
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

  return dataObject;
};
