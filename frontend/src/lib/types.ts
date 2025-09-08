import type { ThematicValues } from './utils';

export type IProject = {
  project: string;
  link?: string;
  association: string;
  description: string;
  thematics: ThematicValues[];
  tags?: string[];
  date: string;
  image: string;
};

export type IFilter = {
  filterName: string;
  filterValue: string;
  thematic?: ThematicValues;
};

export type IInformation = {
  title: string;
  text: { info: string; ctaLink?: string }[];
};
