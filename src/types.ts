export type Planet = {
  __typename: string;
  id: string;
  name: string;
  rotationPeriod: number;
  orbitalPeriod: number;
  diameter: number;
  climates: String[];
  surfaceWater: number;
  population: number;
};

export type Film = {
  id: string;
  title: string;
  planetConnection: { planets: Planet[] };
};

export type SortDataObject<T, K extends keyof T | string> = {
  data: T[];
  sortedBy: K;
  ascending: boolean | null;
};
