import { ReactNode } from "react";

import { SortDataObject } from "../types";

export const variableNamingToNormal = (name: string) => {
  let normal = "";
  let first = true;

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

export const getItemsFromKeys = <T>(
  typeName: string,
  keys: Array<keyof T>,
  ignoredKeys: string[],
  nameKey: string,
  jsx: (key: keyof T, keyString: string) => ReactNode
) => {
  return keys.map((key) => {
    let keyString = variableNamingToNormal(key.toString());

    if (ignoredKeys.includes(key as string)) return null;

    if (key === nameKey) {
      keyString = typeName + " " + key.charAt(0).toUpperCase() + key.slice(1);
    }

    return jsx(key, keyString);
  });
};

export const sortHandler = <T, K extends keyof T>(
  type: K,
  details: SortDataObject<T, K | string>
) => {
  const CONDITION =
    details.sortedBy === type &&
    !!(details.ascending === false || details.ascending === null);

  const sortedData = [...details.data].sort((a, b) => {
    if (Array.isArray(type) && typeof type === "string") {
      const stringA = (a[type] as Array<string>).join("");
      const stringB = (b[type] as Array<string>).join("");

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

  const dataObject: SortDataObject<T, K> = {
    data: sortedData,
    sortedBy: type,
    ascending: CONDITION,
  };

  return dataObject;
};
