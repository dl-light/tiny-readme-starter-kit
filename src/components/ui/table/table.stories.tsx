
import { Meta, StoryObj } from '@storybook/react';

import { Table } from './table';
import { BaseEntity } from '@/types/api';

const meta: Meta<typeof Table> = {
  component: Table,
};

export default meta;

// Update User type to extend BaseEntity
type User = BaseEntity & {
  name: string;
  title: string;
  role: string;
  email: string;
};

type Story = StoryObj<typeof Table<User>>;

const data: User[] = [
  {
    id: '1',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'jane.cooper@example.com',
  },
  {
    id: '2',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    name: 'Cody Fisher',
    title: 'Product Directives Officer',
    role: 'Owner',
    email: 'cody.fisher@example.com',
  },
];

export const Default: Story = {
  args: {
    data,
    columns: [
      {
        title: 'Name',
        field: 'name',
      },
      {
        title: 'Title',
        field: 'title',
      },
      {
        title: 'Role',
        field: 'role',
      },
      {
        title: 'Email',
        field: 'email',
      },
    ],
  },
};
