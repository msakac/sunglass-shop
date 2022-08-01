import React, { useState } from 'react';

interface ITableRowProps {
  [x: string]: any;
  buttons?: string[];
}

export default function TableRow({ data, buttons }: ITableRowProps) {

  function showTableData(i: number, keyName: string) {
    if (i === 0) {
      return (
        <th scope="row" className={styles.tableHead}>
          {data[keyName]}
        </th>
      );
    } else {
      return (
        <td key={data[keyName]} className="py-4 px-6">
          {data[keyName]}
        </td>
      );
    }
  }

  return (
    <tr className={styles.tableRow}>
      {Object.keys(data).map((keyName, i) => showTableData(i, keyName))}
      {buttons?.map((button) => {
        return (
          <td key={button} className="py-4 px-6 text-right">
            <a href="#" className={styles.tableButton}>
              {button}
            </a>
          </td>
        );
      })}
    </tr>
  );
}

const styles = {
  tableRow: 'bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600',
  tableHead: 'py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white',
  tableButton: 'font-medium text-blue-600 dark:text-blue-500 hover:underline'
};

<th scope="row" className={styles.tableHead}>
  Apple MacBook Pro 17"
</th>;
//   <td className="py-4 px-6">Sliver</td>
//   <td className="py-4 px-6">Laptop</td>
//   <td className="py-4 px-6">$2999</td>

// if (isTitle) {
//   setIsTitle(false);
//   return (
//     <th scope="row" className={styles.tableHead}>
//       {data[keyName]}
//     </th>
//   );
// } else {}
