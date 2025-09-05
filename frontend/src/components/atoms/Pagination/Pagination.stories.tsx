import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Pagination from './Pagination';
import { useState } from 'react';

const meta: Meta<typeof Pagination> = {
  title: 'Atoms/Pagination',
  component: Pagination,
  globals: {
    // 👇 Set background value for all component stories
    backgrounds: { value: 'dark', grid: false },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    pageCount: {
      control: { type: 'number' },
    },
    currentPage: {
      control: { type: 'number' },
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  return (
    <Pagination pageCount={3} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
  )
};

export const OnePage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  return (
    <Pagination pageCount={1} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
  )
};

