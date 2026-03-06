

export interface CountryModel {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  population: number;
  capital?: string[];
  region: string;
  subregion: string;
  area: number;
  languages?: { [key: string]: string };
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  borders?: string[];
}