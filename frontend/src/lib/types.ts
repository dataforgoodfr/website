import { ThematicValues } from "./utils";

export interface IProject {
  project: string;
  link?: string
  association: string;
  description: string;
  thematics: ThematicValues[];
  tags?: string[];
  date: string;
  image: string;
}

export interface IFilter {
    filterName: string;
    filterValue: string;
    thematic?: ThematicValues;
}

export interface IInformation {
    title: string;
    text: {info: string; ctaLink?: string;}[];
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