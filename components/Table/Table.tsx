import React from 'react';
import TableRow from './TableRow';

type GlassesType = {
  title: string;
  type: string;
  quantity: string;
  price: string;
  description: string;
  createdAt: number;
};

interface ITableProps {
  style?: string;
  columns: string[];
  buttons?: string[];
  data?: GlassesType[];
}

const DUMMY_DATA = [
  { title: 'dd', type: 'dd', quantity: '1', price: '1', description: 'dd', createdAt: '01. 08. 2022. 12:33:47' },
  { title: 'dd', type: 'dd', quantity: '1', price: '1', description: 'dd', createdAt: '01. 08. 2022. 12:33:47' },
  { title: 'dd', type: 'dd', quantity: '1', price: '1', description: 'dd', createdAt: '01. 08. 2022. 12:33:47' },
  { title: 'dd', type: 'dd', quantity: '1', price: '1', description: 'dd', createdAt: '01. 08. 2022. 12:33:47' }
];

export default function Table({ style, columns, buttons, data }: ITableProps) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            {/* Iteriranje kroz sve stupce*/}
            {columns.map((column) => {
              return (
                <th key={column} scope="col" className="py-3 px-6">
                  {column}
                </th>
              );
            })}
            {/* Iteriranje kroz sve gumbe */}
            {buttons?.map((button) => {
              return (
                <th key={button} scope="col" className="py-3 px-6">
                  <span className="sr-only">{button}</span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {/* Iteriranje kroz sve podatke */}
          {DUMMY_DATA?.map((single) => {
            return <TableRow key={single.createdAt} data={single} buttons={buttons} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  wrapper: 'overflow-x-auto relative shadow-md sm:rounded-lg',
  table: 'w-full text-sm text-left text-gray-500 dark:text-gray-400',
  head: 'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'
};
