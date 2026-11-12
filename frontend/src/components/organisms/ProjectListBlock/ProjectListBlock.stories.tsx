import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProjectListBlock from './ProjectListBlock';
import { ThematicValues } from '@/lib/utils';
import { IFilter, IProject } from '@/lib/types';

const meta: Meta<typeof ProjectListBlock> = {
  title: 'Organisms/ProjectListBlock',
  component: ProjectListBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    titleLevel: {
      control: { type: 'select' },
      options: [1, 2, 3],
    },
    filters: {
      control: { type: 'object' },
    },
    projects: {
      control: { type: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

  const filters: IFilter[] = [
    {
      filterType: "thematic",
      filterName: "Climat et biodiversité",
      filterValue: "climate",
      thematic: "climate" as ThematicValues,
    },
    {
      filterType: "thematic",
      filterName: "Justice sociale",
      filterValue: "social",
      thematic: "social" as ThematicValues,
    },
    {
      filterType: "thematic",
      filterName: "Démocratie",
      filterValue: "democracy",
      thematic: "democracy" as ThematicValues,
    },
    {
      filterType: "season",
      filterName: "Saison 11",
      filterValue: "Saison 11",
    },
    {
      filterType: "season",
      filterName: "Saison 12",
      filterValue: "Saison 12",
    },
  ]

  const projects: IProject[] = [
    {
      project: 'Bloom',
      partners: ['Bloom association'],
      description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
      thematics: ['climate', 'social', 'democracy'] as ThematicValues[],
      image: '/images/thematics/thematics-social.png',
      date: Date.now().toLocaleString(),
      seasons: ["Saison 12"],
      link: "/"
    },
    {
      project: 'Bloom',
      partners: ['Bloom association'],
      description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
      thematics: ['climate', 'social', 'democracy'] as ThematicValues[],
      image: '/images/thematics/thematics-social.png',
      date: Date.now().toLocaleString(),
      seasons: ["Saison 12"],
      link: "/"
    },
    {
      project: 'Trawlwatch',
      partners: ['Bloom association'],
      description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
      thematics: ['democracy'] as ThematicValues[],
      image: '/images/thematics/thematics-social.png',
      date: Date.now().toLocaleString(),
      seasons: ["Saison 12"],
    },
    {
      project: 'Trawlwatch',
      partners: ['Bloom association'],
      description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
      thematics: ['climate', 'democracy'] as ThematicValues[],
      image: '/images/thematics/thematics-social.png',
      date: Date.now().toLocaleString(),
      seasons: ["Saison 12"],
    },
    {
      project: 'Trawlwatch',
      partners: ['Bloom association'],
      description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
      thematics: ['democracy'] as ThematicValues[],
      image: '/images/thematics/thematics-social.png',
      date: Date.now().toLocaleString(),
      seasons: ["Saison 12"],
    },
    {
      project: 'Trawlwatch',
      partners: ['Bloom association'],
      description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
      thematics: ['climate', 'democracy'] as ThematicValues[],
      image: '/images/thematics/thematics-social.png',
      date: Date.now().toLocaleString(),
      seasons: ["Saison 11"],
    },
    {
      project: 'Trawlwatch',
      partners: ['Bloom association'],
      description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
      thematics: ['democracy'] as ThematicValues[],
      image: '/images/thematics/thematics-social.png',
      date: Date.now().toLocaleString(),
      seasons: ["Saison 11"],
    },
    {
      project: 'Trawlwatch',
      partners: ['Bloom association'],
      description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
      thematics: ['climate', 'democracy'] as ThematicValues[],
      image: '/images/thematics/thematics-social.png',
      date: Date.now().toLocaleString(),
      seasons: ["Saison 12", "Saison 11"],
    },
    {
      project: 'Trawlwatch',
      partners: ['Bloom association'],
      description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
      thematics: ['democracy'] as ThematicValues[],
      image: '/images/thematics/thematics-social.png',
      date: Date.now().toLocaleString(),
      seasons: ["Saison 12", "Saison 11"],
    },
    {
      project: 'Trawlwatch',
      partners: ['Bloom association'],
      description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
      thematics: ['climate', 'democracy'] as ThematicValues[],
      image: '/images/thematics/thematics-social.png',
      date: Date.now().toLocaleString(),
      seasons: ["Saison 12", "Saison 11"],
    },
    {
      project: 'Trawlwatch',
      partners: ['Bloom association'],
      description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
      thematics: ['democracy'] as ThematicValues[],
      image: '/images/thematics/thematics-social.png',
      date: Date.now().toLocaleString(),
      seasons: ["Saison 12", "Saison 11"],
    },
    {
      project: 'Page3',
      partners: ['Bloom association'],
      description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
      thematics: ['climate', 'democracy'] as ThematicValues[],
      image: '/images/thematics/thematics-social.png',
      date: Date.now().toLocaleString(),
      seasons: ["Saison 12", "Saison 11"],
    },
  ];


export const Default: Story = {
  args: {
    title: 'Tous les projets',
    titleLevel: 1,
    filters: filters,
    projects: projects,
    pageSize: 4
  },
};

