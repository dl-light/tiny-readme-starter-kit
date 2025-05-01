
import * as React from 'react';

import { BaseEntity } from '@/types/api';

interface TableProps<T> {
  data: T[];
  columns: {
    title: string;
    field: keyof T | ((row: T) => React.ReactNode);
    render?: (row: T) => React.ReactNode;
  }[];
}

export function Table<T extends BaseEntity>({ data, columns }: TableProps<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column, i) => (
              <th
                key={i}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((column, i) => (
                <td key={i} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {column.render
                    ? column.render(row)
                    : typeof column.field === 'function'
                    ? column.field(row)
                    : String(row[column.field])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
