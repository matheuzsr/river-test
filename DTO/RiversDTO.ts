interface RiversData {
  title: string;
  description: string;
  length: string;
  countries: string[];
  continent: string;
  image: string;
  dir: string;
  path: string;
  slug: string;
  updatedAt: Date;
}

export interface RiversDTO {
  error: boolean;
  data: Array<RiversData>;
}
