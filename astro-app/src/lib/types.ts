import { ThematicValues } from './utils';

export interface IProject {
  project: string;
  link?: string;
  partners: string[];
  description: string;
  thematics: ThematicValues[];
  seasons?: string[];
  categories?: string[];
  date: string;
  image: string;
}

export interface IFilter {
  filterName: string;
  filterValue: string;
  filterType: 'thematic' | 'season' | 'category';
  thematic?: ThematicValues;
}

export interface IInformation {
  title: string;
  text: { info: string; ctaLink?: string }[];
}

interface IMember {
  name: string;
  role: string;
  image: string;
}
export interface IMembers {
  title: string;
  members: IMember[];
}

export interface IProjectImpacts {
  value: string;
  text: string;
}
