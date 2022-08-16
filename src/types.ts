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
